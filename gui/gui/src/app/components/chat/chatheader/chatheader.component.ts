import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chatheader',
  templateUrl: './chatheader.component.html',
  styleUrls: ['./chatheader.component.css']
})
export class ChatheaderComponent implements OnInit {

  @Input() chatService:ChatService;

  showError: boolean;
  errorMessage: string;

  constructor() { }

  ngOnInit(): void {
    this.showError = false;
    this.errorMessage = "";
    this.chatService.errors.subscribe((error) => {
      this.showError = true;
      this.errorMessage = error;
      setTimeout(() => {
        this.showError = false;
      }, 10000);
    });
  }

  setClasses() {
    return {
      header: true,
      hidden: !this.chatService.isInChat() && !this.showError,
      error: this.showError
    };
  }

  showMembers() {
    this.chatService.showMembers = !this.chatService.showMembers;
  }

}
