
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {VoyageseditComponent } from'./voyagesedit.component'

describe('VoyageseditComponent', () => {
  let component: VoyageseditComponent;
  let fixture: ComponentFixture<VoyageseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoyageseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyageseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
