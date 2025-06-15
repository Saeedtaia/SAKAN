import { TestBed } from '@angular/core/testing';

import { RegperiodService } from './regperiod.service';

describe('RegperiodService', () => {
  let service: RegperiodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegperiodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
