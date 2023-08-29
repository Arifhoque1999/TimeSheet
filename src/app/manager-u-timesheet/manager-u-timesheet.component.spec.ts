import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUTimesheetComponent } from './manager-u-timesheet.component';

describe('ManagerUTimesheetComponent', () => {
  let component: ManagerUTimesheetComponent;
  let fixture: ComponentFixture<ManagerUTimesheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerUTimesheetComponent]
    });
    fixture = TestBed.createComponent(ManagerUTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
