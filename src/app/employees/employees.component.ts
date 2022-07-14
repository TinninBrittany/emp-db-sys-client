import { Component, OnInit } from '@angular/core';
import { Employee } from './shared/employee.model';
import { EmployeesService } from './shared/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe( res => {
      console.log('res: ', res)
      this.employees = res;
      console.log('response: ', this.employees)
    })
  }

  addEmployee() {
    console.log('Add Employee')
  }

}
