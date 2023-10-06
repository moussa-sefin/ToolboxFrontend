import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSidenavigatonBarComponent } from './user-sidenavigaton-bar.component';

describe('AdminSidenavigatonBarComponent', () => {
  let component: UserSidenavigatonBarComponent;
  let fixture: ComponentFixture<UserSidenavigatonBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSidenavigatonBarComponent]
    });
    fixture = TestBed.createComponent(UserSidenavigatonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
