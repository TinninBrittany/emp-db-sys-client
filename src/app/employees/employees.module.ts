import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesComponent } from './employees.component';

const components = [
  EmployeeListComponent,
  EmployeeFormComponent,
  EmployeeDetailsComponent,
  EmployeesComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
