//  Properties concept supports only in es5 and higher versions
//  use target flag (-t) and refer es5
//  tsc 03.PropertiesDemo.ts -t es5

class Employee
{
    private empno:number = 0;
    private ename:string  = "";

    public get EmployeeId():number
    {
        return this.empno;
    }

    public set EmployeeId(value:number)
    {
        if(value > 0)
        {
            this.empno = value;
        }
        else
        {
            console.log("Invalid Employee Id");
        }
        
    }

    public get EmployeeName():string
    {
        return this.ename;
    }

    public set EmployeeName(value:string)
    {
        this.ename = value;
    }
}


let empObj:Employee = new Employee();
 empObj.EmployeeId = 5465465;  //set
// empObj.EmployeeId = -5465465;  //set

empObj.EmployeeName = "Krishna";  //set
console.log("Employee Id: " + empObj.EmployeeId);  // get
console.log("Employee Name: " + empObj.EmployeeName);  // get
