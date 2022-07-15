import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private employeeService: EmployeesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ employee }) => {
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
