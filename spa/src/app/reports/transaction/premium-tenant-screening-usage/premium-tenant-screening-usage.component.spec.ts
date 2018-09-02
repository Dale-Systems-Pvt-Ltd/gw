/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PremiumTenantScreeningUsageComponent } from './premium-tenant-screening-usage.component';

describe('PremiumTenantScreeningUsageComponent', () => {
  let component: PremiumTenantScreeningUsageComponent;
  let fixture: ComponentFixture<PremiumTenantScreeningUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumTenantScreeningUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumTenantScreeningUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
