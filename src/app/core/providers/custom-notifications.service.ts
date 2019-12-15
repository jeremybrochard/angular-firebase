import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Notification } from '../models/notification';
import { NotificationType } from '../enums/notification-type';

@Injectable({
  providedIn: 'root'
})
export class CustomNotificationsService {

  private _notificationsStream: Subject<Notification>;

  constructor() {
    this._notificationsStream = new Subject<Notification>();
  }

  /**
   * Send a new notification on the notifications stream
   * @param notification
   */
  send(notification: Notification): void {
    if (notification) {
      this._notificationsStream.next(notification);
    }
  }

  /**
   * Send a new error notification
   * @param message content of the notification
   */
  sendError(message: string): void {
    const notification: Notification = new Notification(NotificationType.Error, 'Error', message);
    this.send(notification);
  }

  /**
   * Send a new success notification
   * @param message content of the notification
   */
  sendSucess(message: string): void {
    const notification: Notification = new Notification(NotificationType.Sucess, 'Success', message);
    this.send(notification);
  }

  /**
   * Send a new warning notification
   * @param message content of the notification
   */
  sendWarning(message: string): void {
    const notification: Notification = new Notification(NotificationType.Warning, 'Warning', message);
    this.send(notification);
  }

  /**
   * Listen to notifications
   */
  on(): Observable<Notification> {
    return this._notificationsStream.asObservable();
  }

}
