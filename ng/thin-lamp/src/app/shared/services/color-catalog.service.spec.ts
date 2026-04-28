import { TestBed } from '@angular/core/testing';

import { ColorCatalogService } from './color-catalog.service';

describe('ColorCatalogService', () => {
  let service: ColorCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
