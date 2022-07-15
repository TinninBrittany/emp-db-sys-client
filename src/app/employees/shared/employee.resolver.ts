import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employee } from './employee.model';
import { EmployeesService } from './employees.service';
import { catchError, filter, map, throwError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

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
      // .pipe(catchError(this.handleError));
      .pipe(catchError((err) => {
        this.router.navigate(['/error'], {queryParams: {code: err.status, message: err.error.message}})

        return of()
      }));
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error: ', error);
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    
    this.router.navigate(['/error'], {queryParams: {code: error.status, message: error.error.message}})
    return of()
    // throwError(
      // () => new Error('Something bad happened; please try again later.')
    // );
  }
}
