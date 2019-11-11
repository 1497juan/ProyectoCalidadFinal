import { TestBed } from '@angular/core/testing';

import { ServiciosService } from './servicios.service';

describe('ClientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosService = TestBed.get(ServiciosService);
    expect(service).toBeTruthy();
  });
});
