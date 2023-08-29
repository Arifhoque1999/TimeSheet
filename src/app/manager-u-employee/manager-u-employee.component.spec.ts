import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUEmployeeComponent } from './manager-u-employee.component';

describe('ManagerUEmployeeComponent', () => {
  let component: ManagerUEmployeeComponent;
  let fixture: ComponentFixture<ManagerUEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerUEmployeeComponent]
    });
    fixture = TestBed.createComponent(ManagerUEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
