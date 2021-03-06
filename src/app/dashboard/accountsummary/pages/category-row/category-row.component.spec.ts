import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRowComponent } from './category-row.component';

describe('CategoryRowComponent', () => {
  let component: CategoryRowComponent;
  let fixture: ComponentFixture<CategoryRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
