import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationEnergyComponent } from './station-energy.component';

describe('StationEnergyComponent', () => {
  let component: StationEnergyComponent;
  let fixture: ComponentFixture<StationEnergyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StationEnergyComponent]
    });
    fixture = TestBed.createComponent(StationEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
