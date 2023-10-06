import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationDashboadComponent } from './user-information-dashboad.component';

describe('UserInformationDashboadComponent', () => {
  let component: UserInformationDashboadComponent;
  let fixture: ComponentFixture<UserInformationDashboadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInformationDashboadComponent]
    });
    fixture = TestBed.createComponent(UserInformationDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
