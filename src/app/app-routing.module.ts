import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EditComponent } from './Components/edit/edit.component';
import { EmplomenthistoryComponent } from './Components/emplomenthistory/emplomenthistory.component';

const routes: Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'addEmployee',component:AddEmployeeComponent},
{path:'emplomenthistory',component:EmplomenthistoryComponent},
{path:'edit',component:EditComponent},
{path:'',redirectTo:'dashboard',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
