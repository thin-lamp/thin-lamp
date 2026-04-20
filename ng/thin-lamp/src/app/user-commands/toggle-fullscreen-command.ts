import { FullscreenService } from "../shared/services/fullscreen.service";
import { UserCommandHandler } from "./user-command-handler";

export class ToggleFullscreenCommand implements UserCommandHandler {

    constructor(
        private fullscreenService: FullscreenService
    ) {

    }

    execute(): void {
        if (this.fullscreenService.isFullscreen) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }
}
