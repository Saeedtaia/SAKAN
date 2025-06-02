import { TestBed } from '@angular/core/testing';

import { BuildDetailsService } from './build-details.service';

describe('BuildDetailsService', () => {
  let service: BuildDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
