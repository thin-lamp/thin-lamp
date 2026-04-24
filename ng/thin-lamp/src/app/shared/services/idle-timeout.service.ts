import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdleTimeoutService {

  // idle time in ms
  private readonly idleTime = 3000;
  // timer for counting idling
  private idleTimer?: any;
  // emit when the idle timer expires
  private idleSubject = new Subject<void>();

  constructor() { }

  reset(): void {
    this.stop();
    // time again
    this.idleTimer = setTimeout(() => {
      // close the drawer if idle
      this.idleSubject.next();
    }, this.idleTime);
  }

  stop(): void {
    if (this.idleTime) {
      // clear the timer
      clearTimeout(this.idleTimer);
    }
  }

  onIdle(): Observable<void> {
    return this.idleSubject.asObservable();
  }
}
