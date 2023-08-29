import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LeaveApplyComponent } from './leave-apply/leave-apply.component';
import { ManagerUEmployeeComponent } from './manager-u-employee/manager-u-employee.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { EmployeeTimesheetComponent } from './employee-timesheet/employee-timesheet.component';
import { ManagerUTimesheetComponent } from './manager-u-timesheet/manager-u-timesheet.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { LopComponent } from './lop/lop.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectAssignedComponent } from './project-assigned/project-assigned.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { TimesheetStatusComponent } from './timesheet-status/timesheet-status.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ManagerULopComponent } from './manager-u-lop/manager-u-lop.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'leave-form/:id', component: LeaveFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'TimeSheet/:id', component: ManagerUTimesheetComponent },
  { path: 'admin/:id', component: AdminComponent },
  { path: 'timesheet/:id', component: EmployeeTimesheetComponent },
  { path: 'employee/:id', component: EmployeeComponent },
  { path: 'project-assigned', component: ProjectAssignedComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'Leave-Status/:id', component: LeaveStatusComponent },
  { path: 'timesheet-Status/:id', component: TimesheetStatusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lop/:id', component: LopComponent },
  { path: 'add-employee/:id', component: SignupComponent },
  { path: 'add/:id', component: AddProjectComponent },
  { path: 'update-employee/:id', component:UpdateEmployeeComponent},
  { path: 'manager-lop/:id', component:ManagerULopComponent},
  { path: 'leave/:id', component: LeaveApplyComponent },
  { path: 'admin-employee/:id', component: ManagerUEmployeeComponent },
  { path: 'add-manager', component: AddManagerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
