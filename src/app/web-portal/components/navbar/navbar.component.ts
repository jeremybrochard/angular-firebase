import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/app';
import { AuthService } from '~core/providers/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // Get the current user
    this.authService.currentUser.subscribe(
      (user: User) => {
        if (user) {
          this.currentUser = user;
        }
      },
      (error: any) => {
        // do something...
      }
    );
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }

  logout() {
    console.log('logging out...');
    this.authService.logout().subscribe(
      (isLogoutSuccess: boolean) => {
        this.router.navigate(['/login']);
      },
      (error: any) => {
        // do something...
      }
    );
  }

}
