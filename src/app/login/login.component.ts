import { Component, OnInit, OnDestroy } from '@angular/core';
import { NOTIFICATIONS_OPTIONS } from '../shared/notifications-options';
import { NotificationsService } from 'angular2-notifications';
import { CustomNotificationsService } from '../core/providers/custom-notifications.service';
import { Subscription } from 'rxjs';
import { Notification } from '../core/models/notification';
import { NotificationType } from '../core/enums/notification-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private notificationOptions: any;
  private subscription: Subscription;

  constructor(
    private notificationsService: CustomNotificationsService,
    private angular2NotificationsService: NotificationsService
  ) {
    this.subscription = new Subscription();
    this.subscription.add(
      this.notificationsService.on().subscribe(
        (notification: Notification) => {
          this.displayNotification(notification);
        }
      ));
  }

  ngOnInit(): void {
    // Get notifications options
    this.notificationOptions = NOTIFICATIONS_OPTIONS;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  displayNotification(notification: Notification): void {

    switch (notification.type) {
      case NotificationType.Error: {
        this.angular2NotificationsService.error(notification.title, notification.content);
        break;
      }
      case NotificationType.Sucess: {
        this.angular2NotificationsService.success(notification.title, notification.content);
        break;
      }
      case NotificationType.Warning: {
        this.angular2NotificationsService.warn(notification.title, notification.content);
        break;
      }
    }
  }

}
