import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/providers/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { NOTIFICATIONS_OPTIONS } from '../../../shared/notifications-options';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomNotificationsService } from '../../../core/providers/custom-notifications.service';
import { ResourcesService } from '../../../core/providers/resources.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  rsc: any;
  registerForm: FormGroup;
  notificationOptions: any;
  matcher: MyErrorStateMatcher;

  get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  };

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  };

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  };

  get passwordConfirm(): FormControl {
    return this.registerForm.get('passwordConfirm') as FormControl;
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private notificationsService: CustomNotificationsService,
    private resourcesService: ResourcesService
  ) {
    this.matcher = new MyErrorStateMatcher();
  }

  ngOnInit(): void {

    // Init page resources (static text...)
    this.rsc = this.resourcesService.get().pages.register;

    // Get notifications options
    this.notificationOptions = NOTIFICATIONS_OPTIONS;

    // Init login form
    this.createRegisterForm();
  }

  /**
   * Creates the registration form
   */
  createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', Validators.required),
      passwordConfirm: this.formBuilder.control('', Validators.required)
    });
  }

  onFormSubmit(): void {
    if (this.registerForm.valid) {

      const email: string = this.email.value;
      const password: string = this.password.value;

      this.tryRegister(email, password);
    }
  }

  tryRegister(email: string, password: string): void {
    this.authService.register(email, password).subscribe(
      (onSuccess: boolean) => {
        console.log('REGISTRATION OK!');
      },
      (error: any) => {
        console.error('REGISTRATION FAILED!');
        this.notificationsService.sendError('REGISTRATION FAILED!');
      }
    );
  }

}
