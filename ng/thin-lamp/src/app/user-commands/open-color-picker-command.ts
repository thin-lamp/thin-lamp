import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { UserCommandHandler } from "./user-command-handler";
import { ColorPickerComponent } from "../dialogue/color-picker/color-picker.component";

export class OpenColorPickerCommand implements UserCommandHandler {

    constructor(private dialog: MatDialog) {

    }

    execute(): void {
        this.dialog.open(ColorPickerComponent, {
            height: '560px'
        })
    }
}
