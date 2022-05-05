import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  baseUrl = "http://localhost:3000/students/";

  constructor(private httpClient:HttpClient) { }

  getAllStudents():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  getStudentById(sid:number):any{
    return this.httpClient.get(this.baseUrl+sid);
  }

  public addStudent(stObj:any):any
  {
    return this.httpClient.post(this.baseUrl, stObj);
  }

  public updateStudent(stObj:any):any
  {
    return this.httpClient.put(this.baseUrl + stObj.studentId, stObj);
  }


  public deleteStudent(sid:number):any
  {
    return this.httpClient.delete(this.baseUrl + sid);
  }
}
