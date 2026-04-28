import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { IdleTimeoutService } from '../../shared/services/idle-timeout.service';
import { ColorCatalogService } from '../../shared/services/color-catalog.service';
import { AmbientColorService } from '../../shared/services/ambient-color.service';

@Component({
  selector: 'tl-color-picker',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent implements OnInit {


  readonly dialogRef = inject(MatDialogRef<ColorPickerComponent>);

  readonly colorPalette: string[][];

  lampColor: string;

  previewColor: string;

  constructor(
    private colorService: ColorCatalogService,
    private ambientColorService: AmbientColorService,
    private idleService: IdleTimeoutService
  ) {
    this.colorPalette = colorService.getColors();
    this.lampColor = ambientColorService.color;
    this.previewColor = this.lampColor;
  }

  ngOnInit(): void {
    // stop idle timer when this dialog is open
    this.idleService.stop();
    this.previewColor = this.lampColor;
  }

  onCancel() {
    this.idleService.reset();
    this.previewColor = this.lampColor;
    this.dialogRef.close(null);
  }

  onConfirm() {
    this.idleService.reset();
    this.lampColor = this.previewColor;
    this.dialogRef.close(this.lampColor);
    this.ambientColorService.color = this.lampColor;
  }

  get columns(): number {
    return this.colorPalette[0].length;
  }
}
