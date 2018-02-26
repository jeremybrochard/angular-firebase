import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Subscriber } from 'rxjs/Subscriber';
import { User } from '@firebase/auth-types';

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
