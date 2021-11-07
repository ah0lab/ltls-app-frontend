import { TestBed } from '@angular/core/testing';

import { LtlsObjectService } from './ltls-object.service';

describe('ResourceLoaderService', () => {
  let service: LtlsObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LtlsObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
