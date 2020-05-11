import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-chatmessage',
  templateUrl: './chatmessage.component.html',
  styleUrls: ['./chatmessage.component.css']
})
export class ChatmessageComponent implements OnInit {

  @Input() message:Message;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    return {
      message: true,
      mymessage: this.message.senderIsMe,
      special: this.message.senderIsMe || this.message.userid == -1
    };
  }

}
