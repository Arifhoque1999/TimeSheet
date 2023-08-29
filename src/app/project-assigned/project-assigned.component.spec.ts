import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAssignedComponent } from './project-assigned.component';

describe('ProjectAssignedComponent', () => {
  let component: ProjectAssignedComponent;
  let fixture: ComponentFixture<ProjectAssignedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectAssignedComponent]
    });
    fixture = TestBed.createComponent(ProjectAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
