/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentRollComponent } from './rent-roll.component';

describe('RentRollComponent', () => {
  let component: RentRollComponent;
  let fixture: ComponentFixture<RentRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
