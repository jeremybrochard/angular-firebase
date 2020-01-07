import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupErrorStateMatcher, StandardErrorStateMatcher } from '~core/custom-error-matchers';
import { CustomValidators } from '~core/custom-validators';
import { AuthService } from '~core/providers/auth.service';
import { CustomNotificationsService } from '~core/providers/custom-notifications.service';
import { ResourcesService } from '~core/providers/resources.service';
import { NOTIFICATIONS_OPTIONS } from '~shared/notifications-options';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  rsc: any;
  registerForm: FormGroup;
  notificationOptions: any;
  standardMatcher: StandardErrorStateMatcher;
  groupMatcher: GroupErrorStateMatcher;

  get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  };

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  };

  get password(): FormControl {
    return this.registerForm.get('matchingPassword').get('password') as FormControl;
  };

  get passwordConfirm(): FormControl {
    return this.registerForm.get('matchingPassword').get('passwordConfirm') as FormControl;
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private notificationsService: CustomNotificationsService,
    private resourcesService: ResourcesService
  ) {
    this.standardMatcher = new StandardErrorStateMatcher();
    this.groupMatcher = new GroupErrorStateMatcher();
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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      matchingPassword: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required]
      }, { validator: CustomValidators.areEquals })
    });
  }

  onFormSubmit(): void {
    console.log(this.registerForm.get('matchingPassword'));
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
