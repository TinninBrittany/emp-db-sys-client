import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './shared/employee.model';
import { EmployeesService } from './shared/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe( (employees: Employee[]) => {
      this.employeeList = employees;
    })
  }

  addEmployee() {
    this.router.navigate(['employees/create'])
  }

}
