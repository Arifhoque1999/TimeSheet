import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';

interface TotalHourItem {
  count_of_leaves: number;
  totalHours: number;
  paid_leaves: number;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  id: any;
  data: any;
  count: any;
  leaveStatus: any;
  timeSheetStatus: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, toastr:ToastrService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    const url = `http://localhost:8080/employee/dashboard/${this.id}`;
    const gettotal = `http://localhost:8080/employee/gettotal/${this.id}`;
    const leaveStatusUrl = `http://localhost:8080/employee/leaveList/${this.id}`;
    const timeStatusUrl = `http://localhost:8080/employee/TimeSheetList/${this.id}`;
    this.http.get(url).subscribe((response: any) => {
      this.data = response;
    });

    this.http.get(gettotal).subscribe((gettotal: any) => {
      this.count = gettotal;
      
    });
    
  }

  onDownload(): void {
    const fileName = 'timesheet_description.xlsx';
    const worksheetName = 'Timesheet Description';

    const url = `http://localhost:8080/employee/TimeSheetList/${this.id}`;
    this.http.get<any[]>(url).subscribe((response: any[]) => {
      const dataForExcel = response;

      const workbook: XLSX.WorkBook = XLSX.utils.book_new();
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataForExcel);

      XLSX.utils.book_append_sheet(workbook, worksheet, worksheetName);

      const excelFile: any = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });

      const blob = new Blob([excelFile], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      saveAs(blob, fileName);
    });
  }
}
