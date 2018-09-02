/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentalOwnerEndingBalancesComponent } from './rental-owner-ending-balances.component';

describe('RentalOwnerEndingBalancesComponent', () => {
  let component: RentalOwnerEndingBalancesComponent;
  let fixture: ComponentFixture<RentalOwnerEndingBalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalOwnerEndingBalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalOwnerEndingBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
