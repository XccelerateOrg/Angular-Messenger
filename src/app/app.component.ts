import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages = [];
  constructor(){ }

  ngOnInit() {
  }

  onMessageSent(messageData: {sender: string, content: string}) {
      this.messages.push({
          type: 'send',
          sender: messageData.sender,
          content: messageData.content
      })
  }

}
