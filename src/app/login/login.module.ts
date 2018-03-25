import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    SigninComponent
  ]
})
export class LoginModule { }
