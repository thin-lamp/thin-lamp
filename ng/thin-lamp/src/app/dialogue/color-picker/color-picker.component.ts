import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ColorService } from '../../shared/services/color.service';





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
export class ColorPickerComponent {


  readonly dialogRef = inject(MatDialogRef<ColorPickerComponent>);

  lampColor: string = '';

  readonly colorPalette: string[][];

  constructor(
    private colorService: ColorService) {
    this.colorPalette = colorService.getColors();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onConfirm() {
    console.log(this.lampColor);
  }

  get columns(): number {
    return this.colorPalette[0].length;
  }
}
