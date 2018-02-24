import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPortalRoutingModule } from './web-portal-routing.module';

import { WebPortalComponent } from './web-portal.component';

@NgModule({
  imports: [
    CommonModule,
    WebPortalRoutingModule
  ],
  declarations: [
    WebPortalComponent
  ]
})
export class WebPortalModule { }
