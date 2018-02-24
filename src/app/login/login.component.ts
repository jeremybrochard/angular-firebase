import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/providers/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NOTIFICATIONS_OPTIONS } from '../shared/notifications-options';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  notificationOptions: any;

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  };

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationsService
  ) { }

  ngOnInit(): void {

    // Get notifications options
    this.notificationOptions = NOTIFICATIONS_OPTIONS;

    // Init login form
    this.createLoginForm();
  }

  /**
   * Creates the login form
   */
  createLoginForm(): void {
    this.loginForm = this.formBuilder.group( {
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', Validators.required)
    });
  }

  onFormSubmit(): void {
    const email: string = this.email.value;
    const password: string = this.password.value;

    this.tryLogin(email, password);
  }

  tryLogin(email: string, password: string): void {
    this.authService.login(email, password).subscribe(
      (onSuccess: boolean) => {
        console.log('LOGIN OK!');
      },
      (error: any) => {
        console.log('LOGIN FAILED!');
        this.notificationService.error('Erreur', 'LOGIN FAILED!');
      }
    );
  }

}
