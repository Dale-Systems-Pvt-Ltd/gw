/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeasesEndingComponent } from './leases-ending.component';

describe('LeasesEndingComponent', () => {
  let component: LeasesEndingComponent;
  let fixture: ComponentFixture<LeasesEndingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasesEndingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasesEndingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
