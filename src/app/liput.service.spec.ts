import { TestBed } from '@angular/core/testing';

import { LiputService } from './liput.service';

describe('LiputService', () => {
  let service: LiputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
