import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginModule } from './login/login.module';
import { WebPortalModule } from './web-portal/web-portal.module';
import { AuthGuardService } from './core/providers/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: '',
    loadChildren: './web-portal/web-portal.module#WebPortalModule',
    canLoad: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true // <-- for debug only
        // useHash: true // if we want to use the old-fashionned hash location strategy
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }