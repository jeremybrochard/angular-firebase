import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from '~core/providers/auth.service';
import { AlertService } from '~core/providers/alert.service';

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

  loginForm: FormGroup;
  matcher: MyErrorStateMatcher;

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
  ) {
    this.matcher = new MyErrorStateMatcher();
  }

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
