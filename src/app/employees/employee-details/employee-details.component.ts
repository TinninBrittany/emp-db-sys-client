import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private employeeService: EmployeesService) {}

  ngOnInit(): void {
    this.employeeId = history.state.employeeId;
    console.log('this.employeeId: ', this.employeeId);

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
