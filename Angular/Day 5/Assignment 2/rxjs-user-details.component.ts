
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RxjsServiceService } from '../rxjs-service.service';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {
userDetails:any[] = [];

  constructor(private rxjsService:RxjsServiceService) { }

  ngOnInit(): void {
  }

  getData(){
    this.rxjsService.getData().subscribe((response:any)=>{
      console.log(response);
      this.userDetails = response.data;
    });
  }


}
