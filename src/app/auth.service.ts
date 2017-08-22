import * as firebase from 'firebase';

import { Injectable } from '@angular/core';

import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router){}

    signUp(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.router.navigate(['/messenger'])
                firebase.auth().currentUser.getIdToken()
                    .then((token:string) => this.token = token);
            })
            .catch(err => console.log(err));
    }

    logIn(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(token => {
                this.router.navigate(['/messenger']);
                firebase.auth().currentUser.getIdToken()
                    .then((token:string) => this.token = token);
            })
            .catch(err => console.log(err));
    }

    logOut() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then((token:string) => this.token = token);
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

}
