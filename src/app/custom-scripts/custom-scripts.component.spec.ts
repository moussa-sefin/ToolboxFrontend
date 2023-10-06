import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomScriptsComponent } from './custom-scripts.component';

describe('CustomScriptsComponent', () => {
  let component: CustomScriptsComponent;
  let fixture: ComponentFixture<CustomScriptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomScriptsComponent]
    });
    fixture = TestBed.createComponent(CustomScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
