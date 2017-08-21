import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    constructor(private authService: AuthService) {}
    ngOnInit(){
        firebase.initializeApp({
            apiKey: "AIzaSyBqvtrcq7KJRYrzzHmrdkN9nTi8fAdepR8",
            authDomain: "accelerate-ng.firebaseapp.com"
        });
    }

    logOut() {
        this.authService.logOut();
    }

}
