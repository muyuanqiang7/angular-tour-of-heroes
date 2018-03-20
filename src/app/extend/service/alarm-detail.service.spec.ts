import { TestBed, inject } from '@angular/core/testing';

import { AlarmDetailService } from './alarm-detail.service';

describe('AlarmDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlarmDetailService]
    });
  });

  it('should be created', inject([AlarmDetailService], (service: AlarmDetailService) => {
    expect(service).toBeTruthy();
  }));
});
