import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEnergyComponent } from './total-energy.component';

describe('TotalEnergyComponent', () => {
  let component: TotalEnergyComponent;
  let fixture: ComponentFixture<TotalEnergyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalEnergyComponent]
    });
    fixture = TestBed.createComponent(TotalEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
