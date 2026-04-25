import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserCommand } from './user-commands/user-command';
import { CommandService } from './user-commands/command.service';
import { NgClass } from '@angular/common';
import { IdleTimeoutService } from './shared/services/idle-timeout.service';

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
export class AppComponent implements OnInit {

  @ViewChild('drawer') drawer?: MatDrawer;


  commands: UserCommand[];

  constructor(
    private commandService: CommandService,
    private idleService: IdleTimeoutService
  ) {
    this.commands = this.commandService.getCommands();
  }

  ngOnInit(): void {
    this.idleService.onIdle().subscribe(() => {
      // close the drawer if idle
      this.drawer?.close();
    });
  }

  onMouseMove(event: MouseEvent) {
    this.drawer?.open();
    this.idleService.reset();
  }

  onCommandClick(cmd: UserCommand) {
    cmd.handler?.execute();
  }

}
