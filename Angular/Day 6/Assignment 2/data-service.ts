import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {
  baseUrl:string  = " http://localhost:3000/employees/";

  constructor(private httpObj:HttpClient) { }

  getEmployeeByjob(job:string):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.job == job);
    })
    );
  }

  getEmployeeByDept(dept:string):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.dept == dept);
    })
    );
  }
 


  getStudentNameAndDesignation():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.map(item => {
          return { 	name: item.empname, job : item.job} });
    })
    );
  }
  getEmployeeNotDept(dept:string):Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return  res.filter(item => item.dept != dept);
    })
    );
  }
  getSortedEmployee():Observable<any[]>
  {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map(res => {
        return res.sort((a, b) => (a.sal > b.sal) ? 1 : -1);
    })
    );
  }
}
