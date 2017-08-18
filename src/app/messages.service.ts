import { Injectable } from '@angular/core';
import { Message } from './message.model';

@Injectable()
export class MessagesService {
    messages: Message[] = [
        new Message('I love JavaScript', 'Gordon', new Date()),
        new Message('Did I ever tell you I really like JS?', 'Gordon', new Date()),
        new Message('Atom is the best IDE!!!', 'Gordon', new Date())
    ]

  constructor() { }

  getMessages() {
      return this.messages;
  }
}
