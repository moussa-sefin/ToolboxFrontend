import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingDashboardComponent } from './user-setting-dashboard.component';

describe('UserSettingDashboardComponent', () => {
  let component: UserSettingDashboardComponent;
  let fixture: ComponentFixture<UserSettingDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSettingDashboardComponent]
    });
    fixture = TestBed.createComponent(UserSettingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
