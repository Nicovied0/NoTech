import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTestimonialsComponent } from './cards-testimonials.component';

describe('CardsTestimonialsComponent', () => {
  let component: CardsTestimonialsComponent;
  let fixture: ComponentFixture<CardsTestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsTestimonialsComponent]
    });
    fixture = TestBed.createComponent(CardsTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
