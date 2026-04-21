import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserCommand } from './user-commands/user-command';
import { CommandService } from './user-commands/command.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NgClass
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

  constructor(private commandService: CommandService) {
    this.commands = this.commandService.getCommands();
  }

  onMouseMove(event: MouseEvent) {
    this.drawer?.open();
    this.resetTimer();
  }

  onCommandClick(cmd: UserCommand) {
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
