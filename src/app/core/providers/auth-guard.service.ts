import { Injectable, NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '@firebase/auth-types';
import { Observable, Subscriber } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
    private zone: NgZone
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
            this.zone.run(() => {
              if (user) {
                observer.next(true);
              } else {
                this.router.navigate(['/login']);
                observer.next(false);
              }
            });
          },
          (error: any) => {
            this.zone.run(() => {
              observer.error(error);
            });
          },
          () => {
            this.zone.run(() => {
              observer.complete();
            });
          }
        );
      });
  }

}
