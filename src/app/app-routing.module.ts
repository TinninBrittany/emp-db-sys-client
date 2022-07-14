import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  {
    path: 'employees',
    component: EmployeesComponent,
    // children: [{ path: 'view-employee/:id', component: EmployeeDetailsComponent }]
  },
  { path: 'view-employee/:id', component: EmployeeDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
