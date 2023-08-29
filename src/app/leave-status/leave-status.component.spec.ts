import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveStatusComponent } from './leave-status.component';

describe('LeaveStatusComponent', () => {
  let component: LeaveStatusComponent;
  let fixture: ComponentFixture<LeaveStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveStatusComponent]
    });
    fixture = TestBed.createComponent(LeaveStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
