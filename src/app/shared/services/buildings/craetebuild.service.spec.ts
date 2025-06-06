import { TestBed } from '@angular/core/testing';

import { CraetebuildService } from './craetebuild.service';

describe('CraetebuildService', () => {
  let service: CraetebuildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CraetebuildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
