import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '~core/providers/auth.service';
import { AlertService } from '~core/providers/alert.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    // Init login form
    this.createLoginForm();
  }

  /**
   * Creates the login form
   */
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onFormSubmit() {
    if (this.loginForm.valid) {
      const email: string = this.email.value;
      const password: string = this.password.value;

      this.tryLogin(email, password);
    }
  }

  tryLogin(email: string, password: string) {
    this.authService.login(email, password).subscribe(
      (onSuccess: boolean) => {
        if (onSuccess) {
          // If login succeed, we redirect the user to the home page
          this.router.navigate(['/home']);
        }

      },
      (error: any) => {
        this.alertService.error('LOGIN FAILED!');
      }
    );
  }
}
