import { TestBed } from '@angular/core/testing';

import { SheetScrapeService } from './sheet-scrape.service';

describe('SheetScrapeService', () => {
  let service: SheetScrapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheetScrapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
