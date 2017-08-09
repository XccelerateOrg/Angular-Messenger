import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = [];
  messageSender = '';
  messageContent = '';

  onSendMessage() {
    this.messages.push({
      sender: this.messageSender,
      content: this.messageContent
    });
  }
}
