import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-employee-list5',
  templateUrl: './employee-list5.component.html',
  styleUrls: ['./employee-list5.component.css']
})
export class EmployeeList5Component implements OnInit {


  empno:number=0;
  ename:string="";
  ejob:string=""
  salary:number=0;
  dept:string="";

  public EmpArray:Employee[] = [];

    constructor(private _dataService:DataService) { }

    ngOnInit()
    {
      this.getData_click();
    }

    getData_click()
    {
      
       this.EmpArray = this._dataService.getEmpData();
    }
    AddData_click()
    {
      
      let empObj:Employee= new Employee();
      empObj.Empno=this.empno;
      empObj.EmpName= this.ename;
      empObj.EmoJob=this.ejob;
      empObj.Salary=this.salary;
      empObj.Dept=this.dept;
     this._dataService.addEmpData(empObj);
    }
    delete_click(Empno:number)
    {
      if(confirm("Are you sure want to delete this record?") === true)
      this._dataService. removeEmpData(Empno);
    }
    clearField(){
      this.empno=0;
      this.ename = "";
      this.ejob= "";
      this.salary=0;
      this.dept = "";
  }
}
