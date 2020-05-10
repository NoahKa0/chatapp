import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { Message } from '../models/message';
import { Chat } from '../models/chat';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket:WebSocketSubject<any>;
  callbacks:Map<number, (data) => void> = new Map<number, (data) => void>();
  messages: Message[];
  chats: Chat[];
  members: any[];
  showMembers: boolean;
  selectedChat: number;
  chatName: string;
  errors: Subject<string> = new Subject<string>();

  constructor(private router:Router) {
    if(sessionStorage.getItem("userToken") === null || sessionStorage.getItem("websocketUrl") === null) {
      this.router.navigate(['login']);
    }
    this.messages = [];
    this.chats = [];
    this.members = [];
    this.showMembers = false;
    this.selectedChat = -1;
    this.chatName = "";
  }

  setupSocket() {
    this.socket = webSocket(sessionStorage.getItem("websocketUrl"));
    this.socket.subscribe({
      next: (msg) => {
        switch(msg.type) {
          case 'response':
            // Responses may have callbacks.
            if(msg.hasOwnProperty('identifier') && this.callbacks.has(msg.identifier)) {
              this.callbacks.get(msg.identifier)(msg);
              this.callbacks.delete(msg.identifier);
            }
            break;
          case 'message':
            if(msg.chat == this.selectedChat) {
              this.messages.push(msg);
              console.log(msg);
            }
            break;
          default:
            break;
        }
        console.log(msg);
      },
      error: (err) => {
        this.router.navigate(['login']);
      },
      complete: () => {
        this.errors.next("Disconnected!");
        console.log("Connection closed!");
      }
    });
  }

  authenticate() {
    if(sessionStorage.getItem("userToken") === null || sessionStorage.getItem("websocketUrl") === null) {
      this.router.navigate(['login']);
    }
    this.socket.next({
      type: "authenticate",
      token: sessionStorage.getItem("userToken")
    });
    sessionStorage.setItem("userToken", null);
  }

  sendJson(obj, callback: (data) => void):void {
    let callbackid = Math.floor(Math.random() * 1000000);
    while(this.callbacks.has(callbackid)) {
      callbackid = Math.floor(Math.random() * 1000000);
    }
    this.callbacks.set(callbackid, callback);
    obj.identifier = callbackid;
    
    this.socket.next(obj);
  }

  leaveChat() {
    this.sendJson({
      type: "leaveChat",
      chatid: this.selectedChat
    }, (data) => {
      if(data.status == "error") {
        this.onError(data);
      }
    });
    this.selectedChat = -1;
    this.chatName = "";
    this.refreshChats();
    this.showMembers = false;
    this.messages = [];
  }

  joinChat(chatid) {
    this.selectedChat = chatid;
    this.chatName = this.chats[chatid].name;
    this.sendJson({
      type: "joinChat",
      chatid: this.selectedChat
    }, (data) => {
      if(data.status == "error") {
        this.onError(data);
      }
    });
    this.refreshChats();
  }

  sendMessage(msg:string) {
    if(msg != "" && this.selectedChat != -1) {
      this.sendJson({
        type: "sendMessage",
        chatid: this.selectedChat,
        message: msg
      }, (data) => {
        if(data.status == "error") {
          this.onError(data);
        }
      });
    }
  }

  refreshChats(callback: () => void = () => {}):void {
    this.sendJson({
      type: "getChats",
      name: name
    }, (data) => {
      if(data.status == "success") {
        this.chats = data.chats;
        callback();
        if(this.selectedChat != -1) {
          this.members = this.chats[this.selectedChat].users;
        }
        console.log(this.members);
      } else {
        this.onError(data);
      }
    });
  }

  createChat(name:string) {
    this.sendJson({
      type: "createChat",
      name: name
    }, (data) => {
      if(data.status == "success") {
        this.selectedChat = data.chatid;
        this.refreshChats(() => {
          this.chatName = this.chats[data.chatid].name;
        });
      } else {
        this.onError(data);
      }
    });
  }

  onError(data) {
    if(data.error == "Unauthenticated!") {
      this.router.navigate(['login']);
    }
    this.errors.next(data.error);
    console.log(data);
  }

  isInChat():boolean {
    return this.selectedChat != -1;
  }
  
}
