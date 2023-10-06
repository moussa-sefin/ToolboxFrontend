import { TestBed } from '@angular/core/testing';

import { UserDashboardContentVisibilityService } from './user-dashboard-content-visibility.service';

describe('UserDashboardContentVisibilityService', () => {
  let service: UserDashboardContentVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDashboardContentVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
