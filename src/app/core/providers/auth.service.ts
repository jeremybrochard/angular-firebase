import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class AuthService {

  isLoggedIn: boolean; // True if the user is logged in
  redirectUrl: string; // Store the URL so we can redirect after logging in

  constructor(
    private angularFireAuth: AngularFireAuth
  ) {
    this.isLoggedIn = false;
  }

  /**
   * Sign in user with email and password
   * @param email user email
   * @param password user password
   */
  login(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>(
      (observer: Subscriber<boolean>) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
          .then( // Handle sucess callback
            (response: any) => {
              console.log('Connection succeeded!', response);
              this.isLoggedIn = true;
              observer.next(true);
              observer.complete();
            }
          )
          .catch( // Handle error callback
            (error: any) => {
              console.error('An error occured during authentication', error);
              observer.error(error);
            }
          );
      }
    );
  }

  /**
   * Create new user with email/password based account
   * @param email user emmail
   * @param password user password
   */
  register(email: string, password: string): Observable<boolean> {
    return new Observable<boolean>(
      (observer: Subscriber<boolean>) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
          .then( // Handle sucess callback
            (response: any) => {
              console.log('New user account successfully created!', response);
              observer.next(true);
              observer.complete();
            }
          )
          .catch( // Handle error callback
            (error: any) => {
              console.error('An error occured during user creation', error);
              observer.error(error);
            }
          );
      }
    );
  }

  /**
   * Log out current user
   */
  logout(): void {
    this.isLoggedIn = false;
  }

}
