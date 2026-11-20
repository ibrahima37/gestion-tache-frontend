import { TestBed } from '@angular/core/testing';

import { RapportService } from './rapport.service';

describe('Rapport', () => {
  let service: RapportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
