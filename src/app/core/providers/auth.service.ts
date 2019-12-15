import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '@firebase/auth-types';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string; // Store the URL so we can redirect after logging in

  /**
   * Return current user or null
   */
  get currentUser(): Observable<User | null> {
    return new Observable<User>(
      (observer: Subscriber<User>) => {
        this.angularFireAuth.auth.onAuthStateChanged(
          (user: User) => {
            observer.next(user);
            observer.complete();
          },
          (error) => {
            observer.error(error);
            observer.complete();
          },
          () => {
            // TO DO: why this code is never reached?
            observer.complete();
          }
        );
      }
    );
  }

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

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
              observer.next(true);
              observer.complete();
            }
          )
          .catch( // Handle error callback
            (error: any) => {
              console.error('An error occured during authentication', error);
              observer.error(error);
              observer.complete();
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
              observer.complete();
            }
          );
      }
    );
  }

  /**
   * Log out current user
   */
  logout(): Observable<boolean> {
    return new Observable<boolean>(
      (observer: Subscriber<boolean>) => {
        this.angularFireAuth.auth.signOut()
          .then( // Handle sucess callback
            (response: any) => {
              console.log('User successfully disconnected!', response);
              observer.next(true);
              observer.complete();
            }
          )
          .catch( // Handle error callback
            (error: any) => {
              console.error('An error occured during user logout', error);
              observer.error(error);
              observer.complete();
            }
          );
      }
    );
  }
}
