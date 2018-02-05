import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { EmployeeIndexRow } from '../models/employee-index-row'; 
import { ConfigService } from '../../shared/utils/config.service';

import {BaseService} from '../../shared/services/base.service';

import { Observable } from 'rxjs/Rx';

//import * as _ from 'lodash';

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class EmployeeService extends BaseService {

  baseUrl: string = ''; 

  constructor(private http: Http, private configService: ConfigService) {
     super();
     this.baseUrl = configService.getApiURI();
  }

  getEmployees(): Observable<EmployeeIndexRow[]> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let authToken = localStorage.getItem('auth_token');
      headers.append('Authorization', `Bearer ${authToken}`);
  
    return this.http.get(this.baseUrl + "/employees/home",{headers})
      .map(response => response.json())
      .catch(this.handleError);
  }  
}
