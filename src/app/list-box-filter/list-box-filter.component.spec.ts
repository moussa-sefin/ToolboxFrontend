import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoxFilterComponent } from './list-box-filter.component';

describe('ListBoxFilterComponent', () => {
  let component: ListBoxFilterComponent;
  let fixture: ComponentFixture<ListBoxFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBoxFilterComponent]
    });
    fixture = TestBed.createComponent(ListBoxFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
