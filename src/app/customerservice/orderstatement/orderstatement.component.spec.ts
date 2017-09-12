import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderstatementComponent } from './orderstatement.component';

describe('OrderstatementComponent', () => {
  let component: OrderstatementComponent;
  let fixture: ComponentFixture<OrderstatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderstatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
