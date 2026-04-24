import { MatDialog } from '@angular/material/dialog';
import { OpenColorPickerCommand } from './open-color-picker-command';
import { TestBed } from '@angular/core/testing';

describe('OpenColorPickerCommand', () => {

  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [dialog]
    });
    dialog = TestBed.inject(MatDialog);
  });

  it('should create an instance', () => {
    expect(new OpenColorPickerCommand(dialog)).toBeTruthy();
  });
});
