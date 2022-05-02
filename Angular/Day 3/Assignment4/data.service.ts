import { Injectable } from '@angular/core';
import { Employee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class DataService
 {
  

  EmpArray:Employee[] = [
    {Empno:1,EmpName:"Smith",EmoJob:"Developer",Salary:20000,Dept:"Sales"},
  {Empno:2,EmpName:"Steves",EmoJob:"manager",Salary:42234,Dept:"Admin"},
  {Empno:3,EmpName:"Andrew",EmoJob:"HR",Salary:89000,Dept:"Admin"},
  {Empno:4,EmpName:"Smith",EmoJob:"Developer",Salary:34000,Dept:"Sales"},
  {Empno:5,EmpName:"Steves",EmoJob:"manager",Salary:23000,Dept:"Admin"},
  {Empno:6,EmpName:"Andrew",EmoJob:"HR",Salary:67000,Dept:"Admin"},
  {Empno:7,EmpName:"Smith",EmoJob:"Developer",Salary:34000,Dept:"Sales"},
  {Empno:8,EmpName:"Steves",EmoJob:"manager",Salary:42234,Dept:"Admin"},
  {Empno:9,EmpName:"Andrew",EmoJob:"HR",Salary:95000,Dept:"Admin"},
  {Empno:10,EmpName:"Smith",EmoJob:"Developer",Salary:32400,Dept:"Sales"},
  {Empno:11,EmpName:"Steves",EmoJob:"manager",Salary:56432,Dept:"Admin"},
  {Empno:12,EmpName:"Andrew",EmoJob:"HR",Salary:67843,Dept:"Admin"}
    ];
  public getEmpData():any[]
  {

    return this.EmpArray;
  }
  addEmpData(empObj:Employee)
  {
   
    this.EmpArray.push(empObj);
    
  }
  removeEmpData(eno:number)
  {

    let index = this.EmpArray.findIndex(item => item.Empno ===eno);
    this.EmpArray.splice(index, 1);

  }
}
