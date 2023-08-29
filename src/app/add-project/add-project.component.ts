import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  projectName: string = '';
  projectDescription: string = '';
  startdate: string = '';
  endDate: string = '';
  id: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('ID:', this.id);
  }

  createProject() {
    const projectData = {
      projectName: this.projectName,
      projectDescrption: this.projectDescription,
      startdate: this.startdate,
      endDate: this.endDate,
    };
    console.log(projectData);
    const url = `http://localhost:8080/manager/project/new/${this.id}`;

    this.http.post(url, projectData).subscribe(
      (response) => {
        console.log(projectData);
        console.log('Project data sent successfully:', response);
      },
      (error: HttpErrorResponse) => {
        console.error('Error occurred while sending project data:', error);
        console.log('Error status:', error.status);
        console.log('Error body:', error.error);
      }
    );
  }
}
