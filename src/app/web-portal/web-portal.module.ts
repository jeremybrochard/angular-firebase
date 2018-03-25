import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WebPortalRoutingModule } from './web-portal-routing.module';

import { WebPortalComponent } from './web-portal.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListsComponent } from './pages/lists/lists.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
