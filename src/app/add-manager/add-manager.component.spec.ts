import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagerComponent } from './add-manager.component';

describe('AddManagerComponent', () => {
  let component: AddManagerComponent;
  let fixture: ComponentFixture<AddManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddManagerComponent]
    });
    fixture = TestBed.createComponent(AddManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
