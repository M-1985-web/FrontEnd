import { TestBed } from '@angular/core/testing';

import { SProyectoService } from './sproyecto.service';

describe('SProyectoService', () => {
  let service: SProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
