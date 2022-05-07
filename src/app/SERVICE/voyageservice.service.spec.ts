import { TestBed } from '@angular/core/testing';

import { VoyageserviceService } from './voyageservice.service';

describe('VoyageserviceService', () => {
  let service: VoyageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoyageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
