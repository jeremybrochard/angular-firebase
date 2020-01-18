import { Component, OnInit } from '@angular/core';
import { NOTIFICATIONS_OPTIONS } from './shared/notifications-options';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  notificationOptions: any;

  constructor(translate: TranslateService) {
    this.initDefaultLanguage(translate);
  }

  ngOnInit() {
    this.notificationOptions = NOTIFICATIONS_OPTIONS;
  }

  private initDefaultLanguage(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

}
