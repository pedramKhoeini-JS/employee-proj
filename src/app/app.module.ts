import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee/view/employee-list/employee-list.component';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { MessageService } from 'primeng/api';
import { EmployeeEditComponent } from './employee/view/employee-edit/employee-edit.component';
import { CreateEmployeeComponent } from './employee/component/create-employee/create-employee.component';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeEditComponent, CreateEmployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PrimeNgModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
