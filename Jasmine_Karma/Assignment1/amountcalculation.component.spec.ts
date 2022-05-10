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

  it('should check positive result message after calling method', () => {
    component.unitPrice= 100;
    component.quantity = 1;
    component.getTotalAmount();
    const result:string = component.result;
     expect(result).toBe("Thank you for your purchase!");
   });

   it('should check positive result message after calling method', () => {
    component.unitPrice= 0;
    component.quantity = 0;
    component.getTotalAmount();
    const result:string = component.result;
     expect(result).toBe("Not valid");
   });

   it('should contain success in span tag ', () => {
   let spanObj = fixture.nativeElement.querySelector('span');

   expect(spanObj.textContent).toContain('Total amount');
   });
});
