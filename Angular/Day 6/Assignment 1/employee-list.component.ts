
import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {

  name:string  = "";
  job:string  = "";
  salary:string  = "";
  deptNo:number = 0;
  employeeId:number = 0;
  studentsArray:any[] = [];

  constructor(private dataService:StudentServiceService) { }



  getData_click()
  {
			this.dataService.getAllStudents().subscribe( (resData:any) =>
			{
        console.log(resData);
        this.studentsArray = resData;
			});
  }

  addData_click() {
    let stObj:any = {};
    stObj.studentId = 0;
    stObj.name = this.name;
    stObj.job = this.job;
    stObj.salary = this.salary;
    stObj.deptNo = this.deptNo;

    console.log(stObj);

    this.dataService.addStudent(stObj).subscribe( (resData:any) =>
    {
      alert("New Employee details are added to database");
      this.getData_click();
    });
  }

  updateData_click() {
    let stObj:any = {};
    stObj.employeeId = this.employeeId;
    stObj.name = this.name;
    stObj.job = this.job;
    stObj.salary = this.salary;
    stObj.deptNo = this.deptNo;

    console.log(stObj);

    this.dataService.updateStudent(stObj).subscribe( (resData:any) =>
    {
       alert("Employee details are update to database");
      this.getData_click();
    });
  }

  deleteData_click(sid:number) {

    this.dataService.deleteStudent(sid).subscribe( (resData:any) =>
    {
      alert("Employee details are deleted from database");
      this.getData_click();
    });

  }

  selectData_click(sid:number) {

    this.employeeId = sid;
    
    this.dataService.getStudentById(sid).subscribe( (resData:any) =>
    {
      this.name = resData.name;
      this.salary = resData.salary;
      this.job = resData.job;
      this.deptNo = resData.deptNo;
    });
  }
  clearFields() {
    this.name = "";
    this.salary = "";
    this.job = "";
    this.deptNo = 0;
  }

}
