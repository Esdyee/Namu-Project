import { TestBed, inject } from '@angular/core/testing';

import { MainFeedService } from './main-feed.service';

describe('MainFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainFeedService]
    });
  });

  it('should be created', inject([MainFeedService], (service: MainFeedService) => {
    expect(service).toBeTruthy();
  }));
});
