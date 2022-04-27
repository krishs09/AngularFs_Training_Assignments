import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public empId:number  = 1;
  public empName:string  = "Krishna";
  public job:string  = "Work";
  public salary:number = 213;
  public depo:number = 11;
}
