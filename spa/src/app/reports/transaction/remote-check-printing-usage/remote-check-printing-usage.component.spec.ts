/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RemoteCheckPrintingUsageComponent } from './remote-check-printing-usage.component';

describe('RemoteCheckPrintingUsageComponent', () => {
  let component: RemoteCheckPrintingUsageComponent;
  let fixture: ComponentFixture<RemoteCheckPrintingUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteCheckPrintingUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteCheckPrintingUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
