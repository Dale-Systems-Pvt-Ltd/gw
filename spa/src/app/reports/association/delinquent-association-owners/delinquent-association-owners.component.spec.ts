/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DelinquentAssociationOwnersComponent } from './delinquent-association-owners.component';

describe('DelinquentAssociationOwnersComponent', () => {
  let component: DelinquentAssociationOwnersComponent;
  let fixture: ComponentFixture<DelinquentAssociationOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelinquentAssociationOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelinquentAssociationOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
