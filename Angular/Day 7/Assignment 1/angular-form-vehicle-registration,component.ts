import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-form-vehicle-registration',
  templateUrl: './angular-form-vehicle-registration.component.html',
  styleUrls: ['./angular-form-vehicle-registration.component.css']
})
export class AngularFormVehicleRegistrationComponent  {

  public vehicleForm: FormGroup = new FormGroup({
    name: new FormControl("",Validators.required),
    contact:new FormControl("",[Validators.required,Validators.pattern('\\d{10}')]),
    email:new FormControl("",Validators.email),
    registrationNumber:new FormControl(),
    address:new FormControl("",Validators.required),
       modelName:new FormControl(Validators.minLength(10)),
    color:new FormControl("",Validators.required),
    year:new FormControl("",[Validators.min(2012),Validators.max(2020)]),
  });

  submit_click(){
    let vehicleObj = this.vehicleForm.value;
    console.log(vehicleObj);
  }

}
