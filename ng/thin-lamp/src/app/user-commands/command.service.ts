import { Injectable } from '@angular/core';
import { UserCommand } from './user-command';
import { ToggleFullscreenCommand } from './toggle-fullscreen-command';
import { FullscreenService } from '../shared/services/fullscreen.service';
import { ToggleWakeLockCommand } from './toggle-wake-lock-command';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  commands: UserCommand[] = [];

  toggleFullscreenCommand: ToggleFullscreenCommand;
  toggleWakeLockCommand: ToggleWakeLockCommand;

  constructor(
    private fullscreenService: FullscreenService
  ) {
    this.toggleFullscreenCommand = new ToggleFullscreenCommand(fullscreenService);
    this.toggleWakeLockCommand = new ToggleWakeLockCommand();
    this.initCommands();
  }

  initCommands() {
    this.commands = [
      {
        label: 'Color',
        icon: () => 'palette'
      }, {
        label: 'Connect',
        icon: () => 'mobile_share'
      }, {
        label: 'Fullscreen',
        icon: () => this.fullscreenService.isFullscreen ? 'fullscreen_exit' : 'fullscreen',
        handler: this.toggleFullscreenCommand
      }, {
        label: 'Stay awake',
        icon: () => 'owl',
        classes: () => this.toggleWakeLockCommand.isWakeLockActive ? 'command__awake--active' : 'command__awake--inactive',
        handler: this.toggleWakeLockCommand
      }, {
        label: 'Music',
        icon: () => 'music_note_2'
      }, {
        label: 'Info',
        icon: () => 'info_i'
      },

    ];
  }

  getCommands(): UserCommand[] {
    return this.commands;
  }
}


