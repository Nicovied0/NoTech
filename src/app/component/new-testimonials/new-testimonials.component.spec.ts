import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestimonialsComponent } from './new-testimonials.component';

describe('NewTestimonialsComponent', () => {
  let component: NewTestimonialsComponent;
  let fixture: ComponentFixture<NewTestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTestimonialsComponent]
    });
    fixture = TestBed.createComponent(NewTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
