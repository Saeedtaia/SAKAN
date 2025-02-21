import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomTableComponent } from './coustom-table.component';

describe('CoustomTableComponent', () => {
  let component: CoustomTableComponent;
  let fixture: ComponentFixture<CoustomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoustomTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoustomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
