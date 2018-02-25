import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { 
  MatButtonModule,
  MatInputModule
} from '@angular/material';


import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatInputModule
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SimpleNotificationsModule.forRoot(),
    MATERIAL_COMPONENTS
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
    MATERIAL_COMPONENTS
  ]
})
export class SharedModule { }
