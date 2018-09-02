/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicTenantScreeningUsageComponent } from './basic-tenant-screening-usage.component';

describe('BasicTenantScreeningUsageComponent', () => {
  let component: BasicTenantScreeningUsageComponent;
  let fixture: ComponentFixture<BasicTenantScreeningUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTenantScreeningUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTenantScreeningUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
