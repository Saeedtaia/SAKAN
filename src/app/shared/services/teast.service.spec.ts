import { TestBed } from '@angular/core/testing';

import { TeastService } from './teast.service';

describe('TeastService', () => {
  let service: TeastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
