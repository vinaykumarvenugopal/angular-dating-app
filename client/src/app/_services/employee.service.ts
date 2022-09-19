import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  readonly apiUrl: string = 'https://localhost:5001/api/';
  readonly photoUrl: string = 'https://localhost:5001/photos/';

  constructor(private http: HttpClient) {}

  getEmployeeList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'employee');
  }

  addEmployee(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'employee', emp, httpOptions);
  }

  updateEmployee(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'employee', emp, httpOptions);
  }

  deleteEmployee(emp: any): Observable<void> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: emp };
    return this.http.delete<void>(this.apiUrl + 'employee', httpOptions);
  }

  // uploadPhoto(photo: any) {
  //   return this.http.post(this.apiUrl + 'employee/savefile', photo);
  // }

  // getAllDepartmentNames(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl + 'employee/GetAllDepartmentNames');
  // }
}
