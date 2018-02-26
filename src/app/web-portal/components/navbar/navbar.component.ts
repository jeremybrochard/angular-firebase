import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/providers/auth.service';
import { Router } from '@angular/router';
import { User } from 'firebase/app';
import { CustomNotificationsService } from '../../../core/providers/custom-notifications.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: User

  constructor(
    private authService: AuthService,
    private router: Router,
    private customNotificationsService: CustomNotificationsService
  ) { }

  ngOnInit(): void {
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

  goToHomePage(): void {
    console.log('Clicked!');
    this.router.navigate(['/']);
  }

  logout(): void {
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
