import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunityComponent } from './comunity.component';

describe('ComunityComponent', () => {
  let component: ComunityComponent;
  let fixture: ComponentFixture<ComunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComunityComponent]
    });
    fixture = TestBed.createComponent(ComunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
