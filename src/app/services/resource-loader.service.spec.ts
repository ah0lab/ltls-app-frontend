import { TestBed } from '@angular/core/testing';

import { ResourceLoaderService } from './resource-loader.service';

describe('ResourceLoaderService', () => {
  let service: ResourceLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
