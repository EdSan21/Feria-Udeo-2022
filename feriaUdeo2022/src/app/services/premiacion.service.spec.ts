import { TestBed } from '@angular/core/testing';

import { PremiacionService } from './premiacion.service';

describe('PremiacionService', () => {
  let service: PremiacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
