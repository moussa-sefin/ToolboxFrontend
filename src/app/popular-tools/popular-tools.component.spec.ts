import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularToolsComponent } from './popular-tools.component';

describe('PopularToolsComponent', () => {
  let component: PopularToolsComponent;
  let fixture: ComponentFixture<PopularToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularToolsComponent]
    });
    fixture = TestBed.createComponent(PopularToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
