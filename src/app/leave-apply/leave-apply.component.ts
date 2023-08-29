import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.scss'],
})
export class LeaveApplyComponent {
  id: any;
  data: any;
  empId: any;
  selectedRequestId: number | undefined;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    const url = `http://localhost:8080/manager/leave/${this.id}`;
    this.http.get(url).subscribe((datas: any) => {
      this.data = datas;
    });
  }
  approveLeave(x: number) {
    const y = 'pending';
    const url1 = `http://localhost:8080/manager/leaveapproval/${x}/${y}`;
    this.http.put(url1, { x, y }).subscribe((data) => {
      const url2 = `http://localhost:8080/manager/leave/${this.id}`;
      this.http.get(url2).subscribe((datas: any) => {
        this.data = datas;
        this.toastr.success('Request Approved ');
      });
    });
  }

  rejectLeave(x: number) {
    const y = 'pending';
    const url1 = `http://localhost:8080/manager/Reject/${x}/${y}`;
    this.http.put(url1, { x, y }).subscribe((data) => {
      console.log('Leave request approved');
      console.log(this.id);
      const url2 = `http://localhost:8080/manager/leave/${this.id}`;
      this.http.get(url2).subscribe((datas: any) => {
        this.data = datas;
        this.toastr.error('Request Reject');
        console.log('Received data:', this.data);
      });
    });
  }
}
