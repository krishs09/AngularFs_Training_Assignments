import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent  {

  start:number=0;
  next:number=4;

  userList=[
    {name:"ABC",age:12,gender:"Male"},
    {name:"ABC",age:12,gender:"Male"},
    {name:"ABC",age:12,gender:"Female"},
    {name:"ABC",age:12,gender:"Male"},
    {name:"ABC",age:12,gender:"Male"},
    {name:"ABC",age:12,gender:"Male"},
    {name:"ABC",age:12,gender:"Male"},
    {name:"ABC",age:12,gender:"Male"},
    {name:"ABC",age:12,gender:"Male"},
    {name:"ABC",age:12,gender:"Male"}
  ]

  loadMore(){
    this.next = this.next + 4;
  }

}
