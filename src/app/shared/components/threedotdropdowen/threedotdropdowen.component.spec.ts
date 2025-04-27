import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedotdropdowenComponent } from './threedotdropdowen.component';

describe('ThreedotdropdowenComponent', () => {
  let component: ThreedotdropdowenComponent;
  let fixture: ComponentFixture<ThreedotdropdowenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreedotdropdowenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreedotdropdowenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
