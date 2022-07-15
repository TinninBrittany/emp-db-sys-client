import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() employees!: Employee[];

  displayedColumns: string[] = ['index', 'firstName', 'lastName', 'emailId', 'actions'];
}
