import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee, IEmployee } from '../../model/employee.model';
import { dictionary } from 'src/app/dictionary/dictionary';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  dictionary = dictionary;
  employees: IEmployee[] = [];
  errorMessage: string = '';
  openCreateDialog = false;
  createEmployeeSub$ = new Subscription();
  getAllEmployeesSub$ = new Subscription();

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (res) => {
        this.employees = res.data;
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.log(this.errorMessage);
      },
    });
  }

  onEditClick(employee: IEmployee): void {
    this.router.navigate([`employee/${employee.id}`]);
  }

  onCreateEmployeeClick(data: Employee) {
    this.createEmployeeSub$ = this.employeeService
      .createEmployee(data)
      .subscribe({
        next: (res) => {
          this.toastService.showSuccess(`${res.data.employee_name} created`);
          this.getEmployeeList();
        },
        error: (error) => {
          this.errorMessage = error.message;
        },
      });
  }

  ngOnDestroy(): void {
    this.createEmployeeSub$.unsubscribe();
    this.getAllEmployeesSub$.unsubscribe();
  }
}
