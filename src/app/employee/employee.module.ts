import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';

import { routing } from './employee.routing';
import { RootComponent } from './root/root.component';
import { EmployeeIndexComponent } from './home/employeeindex.component';
import { EmployeeService } from './services/employee.service';

import { AuthGuard } from '../auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule],
  declarations: [RootComponent, EmployeeIndexComponent],
  exports: [],
  providers: [AuthGuard, EmployeeService]
})
export class EmployeeModule { }
