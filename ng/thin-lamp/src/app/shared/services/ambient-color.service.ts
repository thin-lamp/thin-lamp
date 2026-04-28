import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbientColorService {

  readonly DEFAULT_COLOR: string = '#F9A825';

  private ambientColor: string;

  private ambientColorSubjcet = new Subject<void>();

  constructor() {
    this.ambientColor = this.DEFAULT_COLOR;
  }

  set color(color: string) {
    this.ambientColor = color;
    this.ambientColorSubjcet.next();
  }

  get color(): string {
    return this.ambientColor;
  }

  onChange(): Observable<void> {
    return this.ambientColorSubjcet.asObservable();
  }
}
