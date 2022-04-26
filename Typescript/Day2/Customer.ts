class Customer
{
public id:number=0;
public name:string="";
public city:string="";

constructor(id:number=0,name:string="",city:string="")
{
this.id=id;
this.name=name;
this.city=city;


}

public ShowDetails():void
{

    console.log(`Customer Details :: Id = ${this.id} , Name = ${this.name} , City = ${this.city}`);
    console.log("------------------------------------");
}
}

let c1:Customer=new Customer();
let c2:Customer=new Customer(10256);
let c3:Customer=new Customer(10256,"Scott");
let c4:Customer=new Customer(10256,"Scott","Hyd");

c1.ShowDetails();
c2.ShowDetails();
c3.ShowDetails();
c4.ShowDetails();
