import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule } from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatInputModule,
  MatListModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SimpleNotificationsModule.forRoot(),
    MATERIAL_COMPONENTS,
    AgmCoreModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    PageNotFoundComponent,
    SimpleNotificationsModule,
    MATERIAL_COMPONENTS,
    AgmCoreModule
  ]
})
export class SharedModule { }
