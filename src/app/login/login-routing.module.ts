import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Root module component
import { LoginComponent } from './login.component';

// Page components
import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './pages/register/register.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }