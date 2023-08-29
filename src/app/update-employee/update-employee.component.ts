import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss'],
})
export class UpdateEmployeeComponent {
  id: any;
  data: any;
  name: String = '';
  email: String = '';
  empId: String = '';
  phonno: String = '';
  department: String = '';
  type: String = '';

  constructor(private http: HttpClient, private route: ActivatedRoute,  private toastr: ToastrService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    const url = `http://localhost:8080/employee/dashboard/${this.id}`;
    this.http.get(url).subscribe((datas: any) => {
      this.data = datas;
    });
  }

  update() {
    const s = {
      name: this.name,
      email: this.email,
      empId: this.empId,
      phonno: this.phonno,
      department: this.department,
      type: this.type,
    };
    const url = `http://localhost:8080/employee/update/${this.data.empId}`;

    this.http.put(`${url}`, this.data).subscribe(
      (data) => {
       this.toastr.success("Update Successfully!")
      },

      (error) => console.log(error)
    );
  }
}
