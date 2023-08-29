import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  

  id: any;
  data: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    const url = `http://localhost:8080/manager/dashboard/${this.id}`;
    this.http.get(url).subscribe((datas: any) => {
      this.data = datas;

      for (const prop in this.data) {
        if (this.data.hasOwnProperty(prop)) {
        }
      }
    });
  }
}
