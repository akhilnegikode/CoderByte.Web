import { Component, OnInit } from '@angular/core';

import { EmployeeIndexRow } from '../models/employee-index-row';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './employeeindex.component.html'
})
export class EmployeeIndexComponent implements OnInit {

  employees: EmployeeIndexRow[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    this.employeeService.getEmployees()
      .subscribe((data: EmployeeIndexRow[]) => {
        this.employees = data;
      },
      error => {
        //this.notificationService.printErrorMessage(error);
      });

  }
}
