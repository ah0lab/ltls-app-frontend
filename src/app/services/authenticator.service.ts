import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../model/user';
import { AuthToken } from '../model/auth-token';
import { AuthError } from '../model/auth-error';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  private authStatus  = new BehaviorSubject<AuthToken>({token: ''});
  public authResponse = this.authStatus.asObservable();

  constructor() { }

  public Authenticate(credentials: User): AuthError[] {
    let errors: AuthError[] = [];

    // These probably won't be two separate calls.

    // TODO: Check if username exists
    if (credentials.userName !== 'username') {
      errors.push({reason: 'Username', message: 'Username doesn\'t exist'});
    }

    // TODO: Make request to auth db
    if (credentials.password !== 'password') {
      errors.push({reason: 'Password', message: 'Invalid Password'});
    }


    if (errors.length > 0) { return errors; }

    this.authStatus.next({token: 'Logged In'});
    return errors;
  }
}
