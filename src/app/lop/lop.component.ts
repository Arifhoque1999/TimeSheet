import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lop',
  templateUrl: './lop.component.html',
  styleUrls: ['./lop.component.scss']
})
export class LopComponent implements OnInit {
  id: any;
  count: any;
  lopCount: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // const duration: number = 10; // Duration in seconds
    // this.runEverySecond(duration);

    const lopSheet = `http://localhost:8080/manager/getlop/${this.id}`;

    this.http.get(lopSheet).subscribe((lopSheetdata) => {
      this.lopCount = lopSheetdata;
      console.log(this.lopCount)
    });
  }

  // runEverySecond(durationInSeconds: number): void {
  //   let n: number = 0;

  //   const intervalId: number = setInterval(() => {
  //     if (n >= durationInSeconds) {
  //       clearInterval(intervalId);
  //       console.log(intervalId);
  //     } else {
  //       console.log('Employee Data:', n);
  //       const url: string = `http://localhost:8080/manager/lop/500167/${n}`;
  //       this.http.post(url, n).subscribe(
  //         (response) => {
  //           console.log('Employee data sent successfully:', response);
            
  //         },
  //         (error) => {
  //           console.error('Error occurred while sending employee data:', error);
            
  //         }
  //       );
  //       n++;
  //     }
  //   }, 1000);
  // }
}
