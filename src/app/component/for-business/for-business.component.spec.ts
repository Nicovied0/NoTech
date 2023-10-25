import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForBusinessComponent } from './for-business.component';

describe('ForBusinessComponent', () => {
  let component: ForBusinessComponent;
  let fixture: ComponentFixture<ForBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForBusinessComponent]
    });
    fixture = TestBed.createComponent(ForBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
