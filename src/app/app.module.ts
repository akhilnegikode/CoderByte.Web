import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { routing } from './app.routing';

/* App Root */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

/* Account Imports */
import { AccountModule } from "./account/account.module";

/* Employee Imports */
import { EmployeeModule } from './employee/employee.module';

import { ConfigService } from './shared/utils/config.service';

@NgModule({
  declarations: [// what things are in my app
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [ // what stuff do i need?
    AccountModule,
    EmployeeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent] //where do i Start?
})
export class AppModule { }
