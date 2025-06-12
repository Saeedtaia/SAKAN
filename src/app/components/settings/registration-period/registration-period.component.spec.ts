import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPeriodComponent } from './registration-period.component';

describe('RegistrationPeriodComponent', () => {
  let component: RegistrationPeriodComponent;
  let fixture: ComponentFixture<RegistrationPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationPeriodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
