import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss'],
})
export class AddManagerComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}
  name: string = '';
  empid!: number;
  phoneno!: number;
  emailid: string = '';
  password: string = '';

  addManager() {
    const url = 'http://localhost:8080/manager/sign-up';
    const data = {
      name: this.name,
      empid: this.empid,
      phoneno: this.phoneno,
      password: this.password,
      emailid: this.emailid,
    };

    
    this.http.post(url, data).subscribe(
      (response) => {
       this.toastr.success("SuccessFully Add Manager!")
       location.reload();
      },
      (error) => {
        this.toastr.error("Somthing is Wrong")
      }
    );
  }
}
