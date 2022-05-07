import { TestBed } from '@angular/core/testing';

import { InvitationserService } from './invitationser.service';

describe('InvitationserService', () => {
  let service: InvitationserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitationserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
