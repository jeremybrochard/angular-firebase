import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule, MatCardModule, MatProgressSpinnerModule, MatFormFieldModule } from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextComponent } from './components/input-text/input-text.component';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatFormFieldModule
];

const INPUTS_COMPONENTS = [
  InputTextComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SimpleNotificationsModule.forRoot(),
    MATERIAL_COMPONENTS,
    TranslateModule
  ],
  declarations: [
    INPUTS_COMPONENTS
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SimpleNotificationsModule,
    MATERIAL_COMPONENTS,
    TranslateModule,
    INPUTS_COMPONENTS
  ]
})
export class SharedModule { }
