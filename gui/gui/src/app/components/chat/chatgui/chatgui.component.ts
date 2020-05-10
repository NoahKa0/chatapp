import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chatgui',
  templateUrl: './chatgui.component.html',
  styleUrls: ['./chatgui.component.css']
})
export class ChatguiComponent implements OnInit {

  constructor(public chatService:ChatService) { }

  ngOnInit(): void {
    this.chatService.setupSocket();
    this.chatService.authenticate();
  }

}
