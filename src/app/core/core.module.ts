import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './providers/auth-guard.service';
import { AuthService } from './providers/auth.service';
import { environment } from '../../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ResourcesService } from "./providers/resources.service";
import { MixinService } from './providers/mixin.service';
import { ResourcesFactory } from './factories/resources.factory';

// Third-party modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AngularFireAuthModule,
  ],
  providers: [
    AuthGuardService,
    AuthService,
    MixinService,
    ResourcesService, {
      provide: APP_INITIALIZER,
      useFactory: ResourcesFactory,
      deps: [ResourcesService],
      multi: true
    },

  ]
})
export class CoreModule { }