import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifier = new Subject<string>();

  notify(message: string): void {
    this.notifier.next(message);
  }
}
