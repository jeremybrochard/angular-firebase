import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '@firebase/auth-types';
import { Observable, Subscriber } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.isUserLoggedIn;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.isUserLoggedIn;
  }

  get isUserLoggedIn(): Observable<boolean> {
    return new Observable<boolean>(
      (observer: Subscriber<boolean>) => {
        this.authService.currentUser.subscribe(
          (user: User) => {
            if (user) {
              observer.next(true);
            } else {
              this.router.navigate(['/login']);
              observer.next(false);
            }
          },
          (error: any) => {
            observer.error(error);
          },
          () => {
            observer.complete();
          }
        );
      });
  }

}
