import { TestBed } from '@angular/core/testing';

import { Alumno2Service } from './alumno2.service';

describe('Alumno2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Alumno2Service = TestBed.get(Alumno2Service);
    expect(service).toBeTruthy();
  });
});
