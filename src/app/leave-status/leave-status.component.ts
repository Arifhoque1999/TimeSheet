import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.scss']
})
export class LeaveStatusComponent implements OnInit {
  id: any;
  leaveStatus: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    const leaveStatusUrl = `http://localhost:8080/employee/leaveList/${this.id}`;
    this.http.get(leaveStatusUrl).subscribe((leave: any) => {
      this.leaveStatus = leave;
      //console.log(this.leaveStatus);
    });
  }
}
