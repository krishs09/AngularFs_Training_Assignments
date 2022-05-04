import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsServiceService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    console.log("Observalble service")
    return this.httpClient.get('https://reqres.in/api/users');
  }
}
