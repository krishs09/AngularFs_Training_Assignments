import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  empList =[

    {no:88,name:"ABC",job:"Manager",salary:83737,deptNo:6565},
    {no:34,name:"CBD",job:"CEO",salary:565,deptNo:1212},
    {no:65,name:"FHD",job:"Admin",salary:1213,deptNo:343},
    {no:43,name:"IUS",job:"CTO",salary:87878,deptNo:988}
  ]

}
