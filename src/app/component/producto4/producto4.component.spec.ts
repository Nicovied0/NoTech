import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producto4Component } from './producto4.component';

describe('Producto4Component', () => {
  let component: Producto4Component;
  let fixture: ComponentFixture<Producto4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Producto4Component]
    });
    fixture = TestBed.createComponent(Producto4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
