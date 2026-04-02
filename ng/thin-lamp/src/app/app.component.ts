import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('drawer') drawer?: MatDrawer;

  // idle time in ms
  private readonly idleTime = 5000;
  // timer for counting idling
  private idleTimer?: any;

  commands = [
    { label: 'Color', icon: 'palette' },
    { label: 'Connect', icon: 'mobile_share' },
    { label: 'Stay awake', icon: 'owl' },
    { label: 'Music', icon: 'music_note_2' },
    { label: 'Info', icon: 'info_i' },

  ];

  onMouseMove(event: MouseEvent) {
    this.drawer?.open();
    this.resetTimer();
  }

  private resetTimer() {
    // clear the timer
    clearTimeout(this.idleTimer);
    // time again
    this.idleTimer = setTimeout(() => {
      // close the drawer if idle
      this.drawer?.close();
    }, this.idleTime);
  }
}
