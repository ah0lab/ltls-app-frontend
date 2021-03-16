import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AuthenticatorService } from '../../services/authenticator.service';
import {AuthToken} from '../../model/auth-token';
import {AuthError} from '../../model/auth-error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user: User = { userName: '', password: '' };

  loginDisabled = false;
  authAttemptCount = 0;
  authToken: AuthToken;
  authErrors: AuthError[];

  constructor(public auth: AuthenticatorService) { }

  public authenticateUser() {
    this.authErrors = [];
    this.authAttemptCount += 1;
    if (this.authAttemptCount >= 5) {
      this.authErrors.push({reason: 'Login Attmepts', message: 'Too many login attempts made'});
      this.loginDisabled = true;
      return true;
    }

    if (this.user.userName === ' ') {
      this.authErrors.push({reason: 'Username', message: 'Enter a Username'});
      return;
    }

    if (this.user.password === ' ') {
      this.authErrors.push({reason: 'Passowrd', message: 'Enter a Password'});
      return;
    }

    this.authErrors = this.auth.Authenticate(this.user);
  }

  ngOnInit() {
    this.auth.authResponse.subscribe( authToken => this.authToken = authToken );
  }

}
