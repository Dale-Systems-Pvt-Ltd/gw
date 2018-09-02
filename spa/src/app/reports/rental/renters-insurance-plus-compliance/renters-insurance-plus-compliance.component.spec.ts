/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentersInsurancePlusComplianceComponent } from './renters-insurance-plus-compliance.component';

describe('RentersInsurancePlusComplianceComponent', () => {
  let component: RentersInsurancePlusComplianceComponent;
  let fixture: ComponentFixture<RentersInsurancePlusComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentersInsurancePlusComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentersInsurancePlusComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
