import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/providers/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { NOTIFICATIONS_OPTIONS } from '../../../shared/notifications-options';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomNotificationsService } from '../../../core/providers/custom-notifications.service';
import { ResourcesService } from '../../../core/providers/resources.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  rsc: any;
  loginForm: FormGroup;
  notificationOptions: any;
  matcher: MyErrorStateMatcher;

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  };

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private notificationsService: CustomNotificationsService,
    private resourcesService: ResourcesService,
    private router: Router
  ) {
    this.matcher = new MyErrorStateMatcher();
  }

  ngOnInit(): void {

    // Init page resources (static text...)
    this.rsc = this.resourcesService.get().pages.signin;

    // Get notifications options
    this.notificationOptions = NOTIFICATIONS_OPTIONS;

    // Init login form
    this.createLoginForm();
  }

  /**
   * Creates the login form
   */
  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onFormSubmit(): void {
    if (this.loginForm.valid) {
      
      const email: string = this.email.value;
      const password: string = this.password.value;

      this.tryLogin(email, password);
    }
  }

  tryLogin(email: string, password: string): void {
    this.authService.login(email, password).subscribe(
      (onSuccess: boolean) => {
        // If login succeed, we redirect the user to the home page
        if (onSuccess) {
          this.router.navigate(['/home']);
        }

      },
      (error: any) => {
        console.error('LOGIN FAILED!');
        this.notificationsService.sendError('LOGIN FAILED!');
      }
    );
  }
}
