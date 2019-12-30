import { TestBed } from '@angular/core/testing';

import { NgxDualSelectLibService } from './ngx-dual-select-lib.service';

describe('NgxDualSelectLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDualSelectLibService = TestBed.get(NgxDualSelectLibService);
    expect(service).toBeTruthy();
  });
});
