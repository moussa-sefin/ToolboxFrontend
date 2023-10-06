import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFooterDashboadComponent } from './user-footer-dashboad.component';

describe('UserFooterDashboadComponent', () => {
  let component: UserFooterDashboadComponent;
  let fixture: ComponentFixture<UserFooterDashboadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFooterDashboadComponent]
    });
    fixture = TestBed.createComponent(UserFooterDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
