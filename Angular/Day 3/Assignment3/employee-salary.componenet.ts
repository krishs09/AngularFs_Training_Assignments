import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent {

  filterMinValue:number=0;
  filterMaxValue:number=0;

  key:string="salary";
  max:number=0;
  min:number=0;
  
  empList=[
    {number:12312,name:"ABC",job:"Manager",salary:42342,deptnO:12},
    {number:232,name:"ABC",job:"Manager",salary:2342,deptnO:142},
    {number:4343,name:"ABC",job:"Manager",salary:675,deptnO:122},
    {number:54,name:"ABC",job:"Manager",salary:899,deptnO:17},
    {number:55,name:"ABC",job:"Manager",salary:34543,deptnO:82},
    {number:3,name:"ABC",job:"Manager",salary:98988,deptnO:92}
  ]

  salaryRangeFilter(){
    console.log(this.filterMinValue+" "+this.filterMaxValue)
    this.min = this.filterMinValue;
    this.max = this.filterMaxValue;
  }

}
