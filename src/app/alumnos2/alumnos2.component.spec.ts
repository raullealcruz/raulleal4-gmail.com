import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumnos2Component } from './alumnos2.component';

describe('Alumnos2Component', () => {
  let component: Alumnos2Component;
  let fixture: ComponentFixture<Alumnos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alumnos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alumnos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
