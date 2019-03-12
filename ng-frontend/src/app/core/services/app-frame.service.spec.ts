import { TestBed } from '@angular/core/testing';

import { AppFrameService } from './app-frame.service';

describe('AppFrameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppFrameService = TestBed.get(AppFrameService);
    expect(service).toBeTruthy();
  });
});
