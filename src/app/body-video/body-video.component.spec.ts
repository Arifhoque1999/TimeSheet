import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyVideoComponent } from './body-video.component';

describe('BodyVideoComponent', () => {
  let component: BodyVideoComponent;
  let fixture: ComponentFixture<BodyVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyVideoComponent]
    });
    fixture = TestBed.createComponent(BodyVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
