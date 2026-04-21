import { UserCommandHandler } from "./user-command-handler";

export class ToggleWakeLockCommand implements UserCommandHandler {

    private wakeLock: WakeLockSentinel | null = null;


    execute(): void {
        if (this.isWakeLockActive) {
            this.releaseLock()
        } else {
            this.acquireLock();
        }
    }

    async acquireLock() {
        this.wakeLock = await navigator.wakeLock.request('screen');
        this.wakeLock.addEventListener('release', () => {
            this.wakeLock = null;
        });
    }

    async releaseLock() {
        this.wakeLock?.release();
        this.wakeLock = null;
    }

    get isWakeLockActive() {
        return this.wakeLock !== null
    };
}
