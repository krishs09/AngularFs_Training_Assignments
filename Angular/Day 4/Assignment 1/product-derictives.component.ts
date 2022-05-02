import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-directives',
  templateUrl: './product-directives.component.html',
  styleUrls: ['./product-directives.component.css']
})
export class ProductDirectivesComponent{

  displayMode:string="Details";

  modes=[{name:"Details",value:"details.png"},
  {name:"Large Image",value:"largeImage.png"},
  {name:"Small Image",value:"smallImage.png"}, 
  {name:"List",value:"list.png"}];

  productsArr= [
    { name: "Samsung", category: "Mobiles",price:23123,image:'phone.jpg'},
    { name: "Bed", category: "Furniture" ,price:23123,image:'bed.jpg'},
    { name: "Washing Machine", category: "Home Appliances",price:23123,image:'washm.jpg'},
    { name: "Pencil", category: "Stationary",price:23123,image:'pencil.jpg'},
    { name: "Shirt", category: "Apparel",price:23123,image:'shirt.jpg'},
    { name: "Laptop", category: "Electronics",price:23123,image:'laptop.jpg'},
  ] ;

  
changeMode(item:any){
  this.displayMode=item;
}
}
