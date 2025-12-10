import { TestBed } from '@angular/core/testing';

import { FormRegistryService } from './form-registry-service';

describe('FormRegistryService', () => {
  let service: FormRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
