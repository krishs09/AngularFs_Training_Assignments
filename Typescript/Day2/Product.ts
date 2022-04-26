   
class Product
{
private productId:number;
private productName:string
private unitPrice:number;
private qty:number;

constructor(productId:number)
{

    this.productId=productId;
}

public get ProductId():number
{
    return this.productId
}

public set ProductName(value:string)
{
this.productName=value;
}
public get ProductName():string
{
return this.productName;
}
public set UnitPrice(value:number)
{
    this.unitPrice=value;
}

public get UnitPrice():number
{
   return this.unitPrice;
}

public set Quantity(value:number)
{

    this.qty=value;
}

public get Quantity():number
{
    return this.qty;
}


}

let PObj:Product= new Product(10);
PObj.ProductName="Samsung TV";
PObj.UnitPrice=34532;
PObj.Quantity=5;





console.log(`Product Details :: ProductId = ${PObj.ProductId} , ProductName = ${PObj.ProductName} , UnitPrice = ${PObj.UnitPrice} , Quantity=${PObj.Quantity}`);
