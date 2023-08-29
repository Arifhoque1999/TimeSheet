import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-timesheet-status',
  templateUrl: './timesheet-status.component.html',
  styleUrls: ['./timesheet-status.component.scss'],
})
export class TimesheetStatusComponent {
  id: any;
  timeSheetStatus: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    const timeStatusUrl = `http://localhost:8080/employee/TimeSheetList/${this.id}`;
    this.http.get(timeStatusUrl).subscribe((timeStatus: any) => {
      this.timeSheetStatus = timeStatus;
    });
  }
}
