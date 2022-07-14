import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseURL = 'http://localhost:8080/api/v1'

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    console.log('url: ', this.baseURL + '/employees')
    return this.http.get<Employee[]>(this.baseURL + '/employees');
  }
  
}
