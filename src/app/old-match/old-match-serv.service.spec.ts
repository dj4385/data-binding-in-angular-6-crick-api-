import { TestBed } from '@angular/core/testing';

import { OldMatchServService } from './old-match-serv.service';

describe('OldMatchServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OldMatchServService = TestBed.get(OldMatchServService);
    expect(service).toBeTruthy();
  });
});
