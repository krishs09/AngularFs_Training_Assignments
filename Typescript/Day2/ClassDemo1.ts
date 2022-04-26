class Student1{

    public sid:number=5423;
    public name:string="Scott";

    public showDetails():void{

        console.log("Student Id: "+this.sid);
        console.log("Student Name: "+this.name);
    }
}

let stObbj:Student1 = new Student1();
stObbj.showDetails();
