import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
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
  commands = [
    { label: 'Color', icon: 'palette' },
    { label: 'Connect', icon: 'mobile_share' },
    { label: 'Stay awake', icon: 'owl' },
    { label: 'Music', icon: 'music_note_2' },
    { label: 'Info', icon: 'info_i' },

  ];
  title = 'thin-lamp';
}
