import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {

  @Input() chatService:ChatService;

  chatname:string;
  
  constructor() { }

  ngOnInit(): void {
    this.chatname = "";
  }

  setClasses() {
    return {
      chatlist: true,
      hidden: this.chatService.isInChat()
    };
  }

  joinChat(id) {
    this.chatService.joinChat(id)
  }

  createChat() {
    this.chatService.createChat(this.chatname);
  }

}
