import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Employee } from './employee.model';
import { EmployeesService } from './employees.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeResolver implements Resolve<Employee> {
  constructor(private employeeService: EmployeesService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Employee> {
    return this.employeeService
      .getEmployeeById(route.params['id'])
      .pipe(catchError((err) => {
        this.router.navigate(['/error'], {queryParams: {code: err.status, message: err.error.message}})
        return of()
      }));
  }

}
