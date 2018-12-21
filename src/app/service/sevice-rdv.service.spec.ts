import { TestBed } from '@angular/core/testing';

import { SeviceRdvService } from './sevice-rdv.service';

describe('SeviceRdvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeviceRdvService = TestBed.get(SeviceRdvService);
    expect(service).toBeTruthy();
  });
});
