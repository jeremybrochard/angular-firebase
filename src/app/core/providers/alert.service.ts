import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private angular2NotificationsService: NotificationsService) { }

  info(message: string) {
    this.angular2NotificationsService.info('Info', message);
  }

  warn(message: string) {
    this.angular2NotificationsService.warn('Warn', message);
  }

  success(message: string) {
    this.angular2NotificationsService.success('Success', message);
  }

  error(message: string) {
    this.angular2NotificationsService.error('Error', message);
  }

  message(notification: Notification) {
    this.angular2NotificationsService.create(notification.title, notification.content, notification.type);
  }
}
