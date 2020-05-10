import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chatmembers',
  templateUrl: './chatmembers.component.html',
  styleUrls: ['./chatmembers.component.css']
})
export class ChatmembersComponent implements OnInit {

  @Input() chatService:ChatService;
  
  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    return {
      chatmembers: true,
      hidden: !this.chatService.showMembers
    };
  }

  closeMembers() {
    this.chatService.showMembers = !this.chatService.showMembers;
  }

}
