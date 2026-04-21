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

  constructor(
    private fullscreenService: FullscreenService
  ) {
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
        handler: new ToggleFullscreenCommand(this.fullscreenService)
      }, {
        label: 'Stay awake',
        icon: () => 'owl',
        handler: new ToggleWakeLockCommand()
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


