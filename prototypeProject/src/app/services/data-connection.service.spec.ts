import { TestBed } from '@angular/core/testing';

import { DataConnectionService } from './data-connection.service';

describe('DataConnectionService', () => {
  let service: DataConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
