import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ListevoyageComponent } from './listevoyage.component';

describe('ListevoyageComponent', () => {
  let component: ListevoyageComponent;
  let fixture: ComponentFixture<ListevoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListevoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListevoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
