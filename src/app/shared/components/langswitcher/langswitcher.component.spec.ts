import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangswitcherComponent } from './langswitcher.component';

describe('LangswitcherComponent', () => {
  let component: LangswitcherComponent;
  let fixture: ComponentFixture<LangswitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangswitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangswitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
