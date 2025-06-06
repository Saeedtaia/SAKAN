import { TestBed } from '@angular/core/testing';

import { AcssestokenService } from './acssestoken.service';

describe('AcssestokenService', () => {
  let service: AcssestokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcssestokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
