import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-manager-u-lop',
  templateUrl: './manager-u-lop.component.html',
  styleUrls: ['./manager-u-lop.component.scss'],
})
export class ManagerULopComponent {
  id: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  }
  

 
}
