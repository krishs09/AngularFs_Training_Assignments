import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountcalculationComponent } from './amountcalculation.component';

describe('AmountcalculationComponent', () => {
  let component: AmountcalculationComponent;
  let fixture: ComponentFixture<AmountcalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountcalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountcalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should check default value for quantity', () => {
    component.quantity;
    expect(component.quantity).toBe(1);
  });

  it('should check default result message for empty', () => {
   let result= component.result;
    expect(result).toBe("");
  });

  it('should check result message after calling method', () => {
    let result= component.result;
     expect(result).toBe("Thank you for your purchase!");
   });

});
