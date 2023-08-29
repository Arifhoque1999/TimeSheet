import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-manager-u-employee',
  templateUrl: './manager-u-employee.component.html',
  styleUrls: ['./manager-u-employee.component.scss'],
})
export class ManagerUEmployeeComponent {
  id: any;
  data: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router:Router) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    const url = `http://localhost:8080/manager/home/${this.id}`;
    this.http.get(url).subscribe((datas: any) => {
      this.data = datas;
      console.log('i am manager emp' + this.data.id);
    });
  }

  onupdate(id:number){
    const url = "update-employee";
    this.router.navigate(["/update-employee",id]);
  }
  ondelete(empId:number){
    console.log(empId);
    const url = `http://localhost:8080/manager/home/remove/${empId}`;
    this.http.delete(`${url}`).subscribe( (data) =>{
      console.log(this.data);
    }
    , error => console.log(error));
  }
  
}
