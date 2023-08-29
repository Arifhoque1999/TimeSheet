import { Time } from '@angular/common';

export class EmployementDetails {
  id: number | undefined;
  empid: number | undefined;
  description: string | undefined;
  projectName: string | undefined;
  date: Date | undefined;
  time: Time | undefined;
  status: string | undefined; //no
}
