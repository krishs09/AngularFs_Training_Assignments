import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskList:string[]=[
    
  ]
  task:string="";

  constructor() { }


  ngOnInit(): void {
  }
addTask(){
  this.taskList.push(this.task);
}
}
