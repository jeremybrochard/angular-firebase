import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule, MatCardModule, MatProgressSpinnerModule, MatFormFieldModule } from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatFormFieldModule
];

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
