import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainGridComponent } from './component/main-grid/main-grid.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'employees',
  pathMatch: "full"
},{
  path: 'employees',
  component: MainGridComponent
}, {
  path: 'employee/:id',
  component: EmployeeDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
