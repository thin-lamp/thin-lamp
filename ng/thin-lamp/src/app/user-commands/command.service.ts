import { Injectable } from '@angular/core';
import { UserCommand } from './user-command';
import { ToggleFullscreenCommand } from './toggle-fullscreen-command';
import { FullscreenService } from '../shared/services/fullscreen.service';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(
    private fullscreenService: FullscreenService
  ) {

  }

  getCommands(): UserCommand[] {
    return [
      { label: 'Color', icon: 'palette' },
      { label: 'Connect', icon: 'mobile_share' },
      { label: 'Fullscreen', icon: 'fullscreen', handler: new ToggleFullscreenCommand(this.fullscreenService) },
      { label: 'Stay awake', icon: 'owl' },
      { label: 'Music', icon: 'music_note_2' },
      { label: 'Info', icon: 'info_i' },

    ];
  }
}
