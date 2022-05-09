import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit 
{
  constructor(private   route: ActivatedRoute) 
  {

   }
  productArr:any = {};

 filteredProducts:Product[]=[];

  productArrcpy: Product[] = [
    { pid: 1, pname: "Samsung", price: 100, category: "mobile", qty: 4 },
    { pid: 2, pname: "LG", price: 200, category: "TV", qty: 2 },
    { pid: 3, pname: "Toshiba", price: 300, category: "mobile", qty: 4 },
    { pid: 4, pname: "Onida", price: 40540, category: "small", qty: 6 },
    { pid: 5, pname: "Sony", price: 50043, category: "str", qty: 8 },
    { pid: 6, pname: "Toshiba", price: 300, category: "mobile", qty: 4 },
    { pid: 7, pname: "Onida", price: 40330, category: "str", qty: 6 },
    { pid: 8, pname: "Sony", price: 50440, category: "mobile", qty: 8 },
  
  
  ];
    


  ngOnInit(): void {

    let selecteproduct =this.route.snapshot.params["id"];
    this.productArr = this.productArrcpy.filter(item => item.pid == selecteproduct);

    console.log(this.productArr)
  }

}
