import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WebPortalRoutingModule } from './web-portal-routing.module';

import { WebPortalComponent } from './web-portal.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListsComponent } from './components/lists/lists.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [
    SharedModule,
    WebPortalRoutingModule
  ],
  declarations: [
    WebPortalComponent,
    HomeComponent,
    NavbarComponent,
    ListsComponent,
    ProfileComponent
  ]
})
export class WebPortalModule { }
