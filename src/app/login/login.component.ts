import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import { CustomNotificationsService } from '~core/providers/custom-notifications.service';
import { Notification } from '~core/models/notification';
import { NOTIFICATIONS_OPTIONS } from '~shared/notifications-options';
import { NotificationType } from '~core/enums/notification-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  notificationOptions: any;
  private subscription: Subscription;

  constructor(
    private notificationsService: CustomNotificationsService,
    private angular2NotificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.notificationOptions = NOTIFICATIONS_OPTIONS;

    // TODO: Move to our custom notification service?
    this.subscription = this.notificationsService.on().subscribe(
      (notification: Notification) => {
        this.displayNotification(notification);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // TODO: Move to our custom notification service?
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
