import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopnavigatonBarComponent } from './user-topnavigaton-bar.component';

describe('AdminTopnavigatonBarComponent', () => {
  let component: UserTopnavigatonBarComponent;
  let fixture: ComponentFixture<UserTopnavigatonBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTopnavigatonBarComponent]
    });
    fixture = TestBed.createComponent(UserTopnavigatonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
