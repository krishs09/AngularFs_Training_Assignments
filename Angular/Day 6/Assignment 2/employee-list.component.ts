import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-employee-list8',
  templateUrl: './employee-list8.component.html',
  styleUrls: ['./employee-list8.component.css']
})
export class EmployeeList8Component implements OnInit {

  result: any[] = [];

  constructor(private dataService:Data2Service) { }

  ngOnInit(): void {
  }


  getData1_click()
  {
    this.dataService.getEmployeeByjob("Manager").subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData2_click()
  {
    this.dataService. getEmployeeByDept("Testing").subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData3_click()
  {
      this.dataService.getStudentNameAndDesignation().subscribe(resData =>
      {
        this.result = resData;
      });
  }
  getData4_click()
  {
    this.dataService.getEmployeeNotDept("Testing").subscribe(resData =>
      {
        this.result = resData;
      });
  }
  getData5_click()
  {

    this.dataService.getSortedEmployee().subscribe(resData =>
      {
        this.result = resData;
      });
  }
}
