import { TestBed } from '@angular/core/testing';

import { AmbientColorService } from './ambient-color.service';

describe('AmbientColorService', () => {
  let service: AmbientColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbientColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
