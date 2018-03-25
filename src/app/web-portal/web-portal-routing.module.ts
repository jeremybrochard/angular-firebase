import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../core/providers/auth-guard.service';

import { WebPortalComponent } from './web-portal.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ListsComponent } from './pages/lists/lists.component';

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
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'lists',
        component: ListsComponent,
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