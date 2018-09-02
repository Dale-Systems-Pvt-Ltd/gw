/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentersInsurancePlusBillingComponent } from './renters-insurance-plus-billing.component';

describe('RentersInsurancePlusBillingComponent', () => {
  let component: RentersInsurancePlusBillingComponent;
  let fixture: ComponentFixture<RentersInsurancePlusBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentersInsurancePlusBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentersInsurancePlusBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
