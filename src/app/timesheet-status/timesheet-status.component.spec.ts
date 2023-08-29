import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetStatusComponent } from './timesheet-status.component';

describe('TimesheetStatusComponent', () => {
  let component: TimesheetStatusComponent;
  let fixture: ComponentFixture<TimesheetStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetStatusComponent]
    });
    fixture = TestBed.createComponent(TimesheetStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
