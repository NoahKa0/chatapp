import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chatbody',
  templateUrl: './chatbody.component.html',
  styleUrls: ['./chatbody.component.css']
})
export class ChatbodyComponent implements OnInit {

  @Input() chatService:ChatService;

  constructor() { }

  ngOnInit(): void {
  }

}
