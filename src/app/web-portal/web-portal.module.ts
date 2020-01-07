import { NgModule } from '@angular/core';
import { SharedModule } from '~shared/shared.module';

import { WebPortalRoutingModule } from './web-portal-routing.module';

import { WebPortalComponent } from './web-portal.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './pages/articles/articles.component';

@NgModule({
  imports: [
    SharedModule,
    WebPortalRoutingModule
  ],
  declarations: [
    WebPortalComponent,
    HomeComponent,
    NavbarComponent,
    ArticlesComponent
  ]
})
export class WebPortalModule { }
