import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {

  // internal state to track fullscreen status
  private _isFullscreen: boolean = false;

  constructor() {
    this.init();
  }

  private init() {
    document.addEventListener('fullscreenchange', () => {
      this._isFullscreen = !!document.fullscreenElement;
    });
  }


  get isFullscreen() {
    return this._isFullscreen;
  }
}
