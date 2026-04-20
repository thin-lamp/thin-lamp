import { TestBed } from '@angular/core/testing';
import { ToggleFullscreenCommand } from './toggle-fullscreen-command';
import { FullscreenService } from '../shared/services/fullscreen.service';

describe('ToggleFullscreenCommand', () => {

  let fullscreenService: FullscreenService

  beforeEach(
    () => {
      TestBed.configureTestingModule({
        providers: [fullscreenService]
      });
      fullscreenService = TestBed.inject(FullscreenService);
    }
  );

  it('should create an instance', () => {
    expect(new ToggleFullscreenCommand(fullscreenService)).toBeTruthy();
  });
});
