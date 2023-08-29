import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerULopComponent } from './manager-u-lop.component';

describe('ManagerULopComponent', () => {
  let component: ManagerULopComponent;
  let fixture: ComponentFixture<ManagerULopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerULopComponent]
    });
    fixture = TestBed.createComponent(ManagerULopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
