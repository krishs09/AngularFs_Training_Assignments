import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  @Input()
productDetails:any ;

  @Output()
  selectedCat:EventEmitter<string> = new EventEmitter();

  selectCategory:string="";
  categories = [
    {name:"Mobiles",value:"mobiles"},
  {name:"Furniture",value:"furniture"},
  {name:"Home Appliances",value:"homeAppliance"}

 
];

getProductsBasedOnCategory_child(){
  this.selectedCat.emit(this.selectCategory);
}



}
