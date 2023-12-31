import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileEditorComponent } from './user-profile-editor.component';

describe('UserProfileEditorComponent', () => {
  let component: UserProfileEditorComponent;
  let fixture: ComponentFixture<UserProfileEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileEditorComponent]
    });
    fixture = TestBed.createComponent(UserProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
