import { TestBed } from '@angular/core/testing';

import { GitServService } from './git-serv.service';

describe('GitServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitServService = TestBed.get(GitServService);
    expect(service).toBeTruthy();
  });
});
