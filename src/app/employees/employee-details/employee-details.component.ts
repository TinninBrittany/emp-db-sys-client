import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { catchError, filter, map, Observable, of, throwError, tap } from 'rxjs';
import { Employee } from '../shared/employee.model';
import { EmployeesService } from '../shared/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId!: number;
  activeEmployee: Employee | undefined;
  appState$!: Observable<any>;

  constructor(
    private employeeService: EmployeesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ employee }) => {
      console.log('resolver employee: ', employee);
      this.employeeId = employee.id;
    });

    this.employeeService
      .getEmployeeById(this.employeeId)
      .subscribe((employee: Employee) => {
        this.activeEmployee = {
          id: employee.id,
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailId: employee.emailId,
        };
      });
  }
}
