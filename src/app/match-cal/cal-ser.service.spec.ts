import { TestBed } from '@angular/core/testing';

import { CalSerService } from './cal-ser.service';

describe('CalSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalSerService = TestBed.get(CalSerService);
    expect(service).toBeTruthy();
  });
});
