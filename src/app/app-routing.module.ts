import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeResolver } from './employees/shared/employee.resolver';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'error', component: ErrorPageComponent},
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'employees/create',
    component: EmployeeFormComponent
  },
  {
    path: 'view-employee/:id',
    component: EmployeeDetailsComponent,
    resolve: {
      employee: EmployeeResolver,
    },
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
