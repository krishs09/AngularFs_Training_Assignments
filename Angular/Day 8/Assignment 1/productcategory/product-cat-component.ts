import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-prodcategory',
  templateUrl: './prodcategory.component.html',
  styleUrls: ['./prodcategory.component.css']
})
export class ProdcategoryComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
