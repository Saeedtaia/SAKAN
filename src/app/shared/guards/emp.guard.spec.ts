import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { eMPGuard } from './emp.guard';

describe('eMPGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => eMPGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
