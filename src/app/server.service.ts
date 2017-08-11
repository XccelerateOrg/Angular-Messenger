import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeMessage(messages: any[]) {
        return this.http.put('https://accelerate-ng.firebaseio.com/messages.json', messages);
    }

    retrieveMessages() {
        return this.http.get('https://accelerate-ng.firebaseio.com/messages.json')
            .map(
                (response: Response) => {
                const data = response.json();
                return data;
                }
            );
    }
}
