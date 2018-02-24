import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebPortalComponent } from './web-portal.component';
import { AuthGuardService } from '../core/providers/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: WebPortalComponent,
    canActivate: [AuthGuardService]
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