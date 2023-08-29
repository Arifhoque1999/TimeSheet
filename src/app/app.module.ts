import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LeaveApplyComponent } from './leave-apply/leave-apply.component';
import { FooterComponent } from './footer/footer.component';
import { BodyVideoComponent } from './body-video/body-video.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ManagerUEmployeeComponent } from './manager-u-employee/manager-u-employee.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { LopComponent } from './lop/lop.component';
import { EmployeeTimesheetComponent } from './employee-timesheet/employee-timesheet.component';
import { ManagerUTimesheetComponent } from './manager-u-timesheet/manager-u-timesheet.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectAssignedComponent } from './project-assigned/project-assigned.component';
import { ToastrModule } from 'ngx-toastr';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { TimesheetStatusComponent } from './timesheet-status/timesheet-status.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ManagerULopComponent } from './manager-u-lop/manager-u-lop.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    EmployeeComponent,
    HomeComponent,
    LeaveApplyComponent,
    FooterComponent,
    BodyVideoComponent,
    NavbarComponent,
    ManagerUEmployeeComponent,
    LeaveFormComponent,
    LopComponent,
    EmployeeTimesheetComponent,
    ManagerUTimesheetComponent,
    AddManagerComponent,
    AddProjectComponent,
    ProjectAssignedComponent,
    LeaveStatusComponent,
    TimesheetStatusComponent,
    UpdateEmployeeComponent,
    ManagerULopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
