import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() employees!: Employee[];

  displayedColumns: string[] = ['index', 'firstName', 'lastName', 'emailId', 'actions'];


  constructor() { }

  ngOnInit(): void {
  }

  viewEmployee(employeeId: number) {
    console.log('employee Id: ', employeeId)
    console.log('View Employee')
  }

  updateEmployee() {
    console.log('Update Employee')
  }
  
  deleteEmployee() {
    console.log('Delete Employee')
  }
}
