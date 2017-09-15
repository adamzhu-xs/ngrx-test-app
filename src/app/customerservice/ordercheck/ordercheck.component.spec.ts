import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercheckComponent } from './ordercheck.component';

describe('OrdercheckComponent', () => {
  let component: OrdercheckComponent;
  let fixture: ComponentFixture<OrdercheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdercheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
