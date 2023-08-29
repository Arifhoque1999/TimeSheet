import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-timesheet',
  templateUrl: './employee-timesheet.component.html',
  styleUrls: ['./employee-timesheet.component.scss'],
})
export class EmployeeTimesheetComponent implements OnInit {
  id: any;
  data: any;
  empid: number = 0;
  description: string = '';
  time: string = '';
  date: string = '';
  projectName: string = '';
  selectedOption: string = '';
  status: string = 'pending';
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  onOptionChange(event: any) {
    this.selectedOption = event.target.value;
  }

  employeeTimeSheet() {
    const employeeData = {
      empid: this.id,
      description: this.description,
      date: this.date,
      projectName: this.projectName,
      time: this.selectedOption,
      status: this.status,
    };
    this.http
      .post(
        `http://localhost:8080/employee/TimesheetSubmit/${this.id}`,
        employeeData
      )
      .subscribe(() => {
        this.toastr.success('Successfully Submitted');
        location.reload()
      });
  }

  approveLeave(x: number) {
    const y = 'approved';
    const url1 = `http://localhost:8080/manager/timesheetapproval/${x}/${y}`;
    this.http.post(url1, { x, y }).subscribe((data) => {
      console.log('Leave request approved');
      const url2 = `http://localhost:8080/manager/getpendingtimesheet/${this.id}`;
      this.http.get(url2).subscribe((datas: any) => {
        this.data = datas;
        
      });
    });
  }
  
}
