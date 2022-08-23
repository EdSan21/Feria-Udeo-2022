import { TestBed } from '@angular/core/testing';

import { InfoprojectsService } from './infoprojects.service';

describe('InfoprojectsService', () => {
  let service: InfoprojectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoprojectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
