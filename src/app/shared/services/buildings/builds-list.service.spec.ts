import { TestBed } from '@angular/core/testing';

import { BuildsListService } from './builds-list.service';

describe('BuildsListService', () => {
  let service: BuildsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
