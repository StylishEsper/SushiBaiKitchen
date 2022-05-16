import { TestBed } from '@angular/core/testing';

import { TransactionProcessingService } from './transaction-processing.service';

describe('TransactionProcessingService', () => {
  let service: TransactionProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
