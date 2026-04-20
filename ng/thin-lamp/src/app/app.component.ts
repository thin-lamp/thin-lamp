import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserCommandHandler } from './user-commands/user-command-handler';
import { ToggleFullscreenCommand } from './user-commands/toggle-fullscreen-command';
import { FullscreenService } from './shared/services/fullscreen.service';

// type for one time, button rendering use 
type UserCommand = {
  // label of the command button
  label: string,
  // icon of the command button
  icon: string,
  // handler of the command button
  handler?: UserCommandHandler
};

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild('drawer') drawer?: MatDrawer;

  // idle time in ms
  private readonly idleTime = 3000;
  // timer for counting idling
  private idleTimer?: any;

  commands: UserCommand[];

  constructor(private fullscreenService: FullscreenService) {
    this.commands = [
      { label: 'Color', icon: 'palette' },
      { label: 'Connect', icon: 'mobile_share' },
      { label: 'Fullscreen', icon: 'fullscreen', handler: new ToggleFullscreenCommand(this.fullscreenService) },
      { label: 'Stay awake', icon: 'owl' },
      { label: 'Music', icon: 'music_note_2' },
      { label: 'Info', icon: 'info_i' },

    ];
  }

  onMouseMove(event: MouseEvent) {
    this.drawer?.open();
    this.resetTimer();
  }

  onCommandClick(cmd: UserCommand) {
    console.log(`${cmd.label} is clicked`);
    cmd.handler?.execute();
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
