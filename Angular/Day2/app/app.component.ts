import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productsArray=[
    {pName:"Nokia",pCategory:"Mobiles",pPrice:"777"},
    {pName:"Table",pCategory:"Furniture",pPrice:"44"},
    {pName:"Washin Mashine",pCategory:"Home Appliances",pPrice:"33"},
    {pName:"Samsung",pCategory:"Mobiles",pPrice:"88"},
    {pName:"Bed",pCategory:"Furniture",pPrice:"11"},
  ];

  getProductList(category:any){
    console.log(category);
    console.log(this.productsArray.filter(item=>item.pCategory==category));
    this.productsArray = this.productsArray.filter(item=>item.pCategory==category);
  }

}
