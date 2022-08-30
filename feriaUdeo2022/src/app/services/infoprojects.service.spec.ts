import { TestBed } from '@angular/core/testing';

import { InfoProjectsService } from './infoprojects.service';

describe('InfoprojectsService', () => {
  let service: InfoProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
