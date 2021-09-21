import { TestBed } from '@angular/core/testing';

import { TipRetrieverService } from './tip-retriever.service';

describe('TipRetrieverService', () => {
  let service: TipRetrieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipRetrieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
