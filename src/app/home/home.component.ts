import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    selectedLogin = true;
    loginbtn = 'btn-primary';
    signupbtn = 'btn-secondary';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  buttonClickLogIn(event){
      this.selectedLogin = true;
      this.loginbtn = 'btn-primary';
      this.signupbtn = 'btn-secondary';
  }

  buttonClickSignUp(event){
      this.selectedLogin = false;
      this.loginbtn = 'btn-secondary';
      this.signupbtn = 'btn-primary';
  }

  onSignUp(details: {email: string, password: string}) {
      this.authService.signUp(details.email, details.password);
  }

  onLogIn(details: {email: string, password: string}) {
      this.authService.logIn(details.email, details.password);
  }
}
