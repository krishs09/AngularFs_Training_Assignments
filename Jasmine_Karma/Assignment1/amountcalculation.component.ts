import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amountcalculation',
  templateUrl: './amountcalculation.component.html',
  styleUrls: ['./amountcalculation.component.css']
})
export class AmountcalculationComponent implements OnInit {

  productName:string="";
  unitPrice:any=250;
  quantity:any=1;
  result:string="";
  total:number=0;

  constructor() { } 

  ngOnInit(): void {
  }

  getTotalAmount(){

    this.total = this.unitPrice * this.quantity;

    if(this.total != 0){
      this.result = "Thank you for your purchase!"
    }

  }

}
