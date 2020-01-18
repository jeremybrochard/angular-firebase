import { Component, OnInit } from '@angular/core';
import { NOTIFICATIONS_OPTIONS } from './shared/notifications-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  notificationOptions: any;

  ngOnInit() {
    this.notificationOptions = NOTIFICATIONS_OPTIONS;
  }

}
