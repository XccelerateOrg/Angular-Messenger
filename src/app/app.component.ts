import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages: Message[] = [ ];
  term = '';
  constructor(){ }

  ngOnInit() {
  }

  onMessageSent(messageData: {sender: string, content: string}) {
      this.messages.push(new Message(messageData.content, messageData.sender, new Date()))
  }

}
