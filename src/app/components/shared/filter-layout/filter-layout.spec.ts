import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLayout } from './filter-layout';

describe('FilterLayout', () => {
  let component: FilterLayout;
  let fixture: ComponentFixture<FilterLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
