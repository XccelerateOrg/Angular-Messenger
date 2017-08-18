import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Message } from './message.model';
import { ServerService } from './server.service';

=======
>>>>>>> 07-routing

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
<<<<<<< HEAD
  messages: Message[] = [ ];
  term = '';
  constructor(private serverService: ServerService){ }

  ngOnInit() {
     this.getMessages();
  }

  onMessageSent(messageData: {sender: string, content: string}) {
      this.messages.push(new Message(messageData.content, messageData.sender, new Date()))
      this.serverService.storeMessage(this.messages)
        .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
  }

  getMessages() {
      this.serverService.retrieveMessages()
        .subscribe(
            (messages: any[]) => this.messages = messages,
            (error) => console.log(error)
        )
  }
=======
    constructor() {}
    ngOnInit(){}
>>>>>>> 07-routing


}
