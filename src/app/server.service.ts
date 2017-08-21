import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { AuthService } from './auth.service';

import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http,
                private authService: AuthService) {}

    storeMessage(messages: any[]) {
        return this.http.put('https://accelerate-ng.firebaseio.com/messages.json', messages);
    }

    retrieveMessages() {
        const token = this.authService.getToken();
        return this.http.get('https://accelerate-ng.firebaseio.com/messages.json?auth='+token)
            .map(
                (response: Response) => {
                const data = response.json();
                return data;
                }
            );
    }
}
