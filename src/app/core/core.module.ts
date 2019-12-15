// Core modules
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Third-party modules
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule,  } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Factories
import { ResourcesFactory } from './factories/resources.factory';

// Providers singletons
import { AuthGuardService } from './providers/auth-guard.service';
import { AuthService } from './providers/auth.service';
import { CustomNotificationsService } from './providers/custom-notifications.service';
import { ExceptionService } from './providers/exception.service';
import { MixinService } from './providers/mixin.service';
import { ResourcesService } from './providers/resources.service';

// Load app environment
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AgmCoreModule.forRoot(environment.googleMapConfig)
  ],
  providers: [
    ResourcesService, {
      provide: APP_INITIALIZER,
      useFactory: ResourcesFactory,
      deps: [ResourcesService],
      multi: true
    },
    AuthService,
    AuthGuardService,
    MixinService,
    CustomNotificationsService,
    ExceptionService
  ]
})
export class CoreModule { }
