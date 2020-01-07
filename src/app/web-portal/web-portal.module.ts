import { NgModule } from '@angular/core';
import { SharedModule } from '~shared/shared.module';

import { WebPortalRoutingModule } from './web-portal-routing.module';

import { WebPortalComponent } from './web-portal.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';

import { ArticlesService } from './providers/articles.service';

@NgModule({
  imports: [
    SharedModule,
    WebPortalRoutingModule
  ],
  declarations: [
    WebPortalComponent,
    HomeComponent,
    NavbarComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  providers: [
    ArticlesService
  ]
})
export class WebPortalModule { }
