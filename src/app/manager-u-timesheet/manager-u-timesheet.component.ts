import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { EmployementDetails } from '../employement-details';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-manager-u-timesheet',
  templateUrl: './manager-u-timesheet.component.html',
  styleUrls: ['./manager-u-timesheet.component.scss'],
})
export class ManagerUTimesheetComponent {
  data: any;
  id: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    const url = `http://localhost:8080/manager/getpendingtimesheet/${this.id}`;
    this.http.get(url).subscribe((response: any) => {
      console.log(response);
      this.data = response;
      console.log(this.data.status);
    });
  }

  approveTimesheet(x: number) {
    const y = 'pending';
    const url1 = `http://localhost:8080/manager/TimesheetApprove/${x}/${y}`;
    this.http.put(url1, { x, y }).subscribe((data) => {
      this.toastr.success('Requeat Approved');
      const url2 = `http://localhost:8080/manager/getpendingtimesheet/${this.id}`;
      this.http.get(url2).subscribe((datas: any) => {
        this.data = datas;
      });
    });
  }

  rejectTimesheet(x: number) {
    const y = 'pending';
    const url1 = `http://localhost:8080/manager/Disapprove/${x}/${y}`;
    this.http.put(url1, { x, y }).subscribe((data) => {
      this.toastr.success('Requeat Reject');
      const url2 = `http://localhost:8080/manager/getpendingtimesheet/${this.id}`;
      this.http.get(url2).subscribe((datas: any) => {
        this.data = datas;
      });
    });
  }
}
