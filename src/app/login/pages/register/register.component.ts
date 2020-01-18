import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupErrorStateMatcher, StandardErrorStateMatcher } from '~core/custom-error-matchers';
import { CustomValidators } from '~core/custom-validators';
import { AuthService } from '~core/providers/auth.service';
import { AlertService } from '../../../core/providers/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  standardMatcher: StandardErrorStateMatcher;
  groupMatcher: GroupErrorStateMatcher;

  get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('matchingPassword').get('password') as FormControl;
  }

  get passwordConfirm(): FormControl {
    return this.registerForm.get('matchingPassword').get('passwordConfirm') as FormControl;
  }

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) {
    this.standardMatcher = new StandardErrorStateMatcher();
    this.groupMatcher = new GroupErrorStateMatcher();
  }

  ngOnInit() {
    // Init login form
    this.createRegisterForm();
  }

  /**
   * Creates the registration form
   */
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      matchingPassword: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required]
      }, { validator: CustomValidators.areEquals })
    });
  }

  onFormSubmit() {
    console.log(this.registerForm.get('matchingPassword'));
    if (this.registerForm.valid) {

      const email: string = this.email.value;
      const password: string = this.password.value;

      this.tryRegister(email, password);
    }
  }

  tryRegister(email: string, password: string) {
    this.authService.register(email, password).subscribe(
      (onSuccess: boolean) => {
        console.log('REGISTRATION OK!');
      },
      (error: any) => {
        this.alertService.error('REGISTRATION FAILED!');
      }
    );
  }

}
