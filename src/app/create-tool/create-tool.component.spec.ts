import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateToolComponent } from './create-tool.component';

describe('CreateToolComponent', () => {
  let component: CreateToolComponent;
  let fixture: ComponentFixture<CreateToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateToolComponent]
    });
    fixture = TestBed.createComponent(CreateToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
