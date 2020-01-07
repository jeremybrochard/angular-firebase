// Core modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '~core/core.module';
import { SharedModule } from '~shared/shared.module';

// Root component
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
