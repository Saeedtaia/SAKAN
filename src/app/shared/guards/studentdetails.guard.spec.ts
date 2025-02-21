import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { studentdetailsGuard } from './studentdetails.guard';

describe('studentdetailsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => studentdetailsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
