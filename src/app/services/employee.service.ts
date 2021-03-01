import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../model/employee'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee:Employee
  constructor(private http: HttpClient) { }
  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/api/v1/employees')
  }
  getHistory(id:any):Observable<any>{
    return this.http.get(`http://localhost:8081/api/v1/employeehistory/${id}`);
  }
  deleteEmployee(empId:number):Observable<void>{
   return this.http.delete<void>(`http://localhost:8080/api/v1/employee/${empId}`);
  }
  getAllByGender(val):Observable<any>{
    return this.http.get(`http://localhost:8080/api/v1/employees/gender/${val}`)
    }
  addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>('http://localhost:8080/api/v1/employees',employee)
  }
  getById(val):Observable<any>{
    return this.http.get(`http://localhost:8080/api/v1/employee/${val}`);
  }
  updateEmployee(val:Employee):Observable<Employee>{
   return this.http.put<Employee>('http://localhost:8080/api/v1/employees',val)
  }


}
