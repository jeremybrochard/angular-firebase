import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../core/providers/auth-guard.service';

import { WebPortalComponent } from './web-portal.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WebPortalComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: '',
        redirectTo: 'home',
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
export class WebPortalRoutingModule { }