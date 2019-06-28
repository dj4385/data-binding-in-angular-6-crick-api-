import { TestBed } from '@angular/core/testing';

import { CricService } from './cric.service';

describe('CricService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CricService = TestBed.get(CricService);
    expect(service).toBeTruthy();
  });
});
