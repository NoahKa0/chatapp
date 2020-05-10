import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chatinput',
  templateUrl: './chatinput.component.html',
  styleUrls: ['./chatinput.component.css']
})
export class ChatinputComponent implements OnInit {

  @Input() chatService:ChatService;

  message = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = "";
  }

  messageKeyDown(event) {
    if(event.keyCode === 13) {
      this.sendMessage();
    }
  }

}
