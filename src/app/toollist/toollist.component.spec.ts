import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToollistComponent } from './toollist.component';

describe('ToollistComponent', () => {
  let component: ToollistComponent;
  let fixture: ComponentFixture<ToollistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToollistComponent]
    });
    fixture = TestBed.createComponent(ToollistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
