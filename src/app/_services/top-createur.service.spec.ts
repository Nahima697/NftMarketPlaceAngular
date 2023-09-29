import { TestBed } from '@angular/core/testing';

import { TopCreateurService } from './top-createur.service';

describe('TopCreateurService', () => {
  let service: TopCreateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopCreateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
