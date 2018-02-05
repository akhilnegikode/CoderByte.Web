import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { RootComponent }    from './root/root.component';
import { EmployeeIndexComponent }    from './home/employeeindex.component'; 

import { AuthGuard } from '../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'employee',
      component: EmployeeIndexComponent, canActivate: [AuthGuard],

      children: [      
       { path: '', component: EmployeeIndexComponent },
       { path: 'home',  component: EmployeeIndexComponent },
      ]       
    }  
]);

