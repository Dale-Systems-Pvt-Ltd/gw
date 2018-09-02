/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentPaidComponent } from './rent-paid.component';

describe('RentPaidComponent', () => {
  let component: RentPaidComponent;
  let fixture: ComponentFixture<RentPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentPaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
