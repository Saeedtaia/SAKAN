import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { sTDdetailsResolver } from './stddetails.resolver';

describe('sTDdetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => sTDdetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
