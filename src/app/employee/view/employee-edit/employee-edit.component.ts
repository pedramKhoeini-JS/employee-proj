import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { dictionary } from 'src/app/dictionary/dictionary';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
})
export class EmployeeEditComponent implements OnInit {
  dictionary = dictionary;
  employee = new Employee();
  employeeId: number | undefined;
  getEmployeeSub$ = new Subscription();
  editEmployeeSub$ = new Subscription();
  errorMessage: string = '';
  showLoading = false;
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.employeeId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee(): void {
    this.showLoading = true;
    this.getEmployeeSub$ = this.employeeService
      .getEmployeeById(this.employeeId!)
      .subscribe({
        next: (res) => {
          this.employee = res.data;
          this.showLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.showLoading = false;
        },
      });
  }

  onEditEmployeeClick(): void {
    this.showLoading = true;
    this.editEmployeeSub$ = this.employeeService
      .updateEmployee(this.employeeId!, this.employee)
      .subscribe({
        next: (res) => {
          this.toastService.showSuccess(`${res.data.employee_name} edited`);
          this.showLoading = false;
          this.router.navigate(['/employee']);
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.showLoading = false;
        },
      });
  }
  ngOnDestroy(): void {
    this.getEmployeeSub$.unsubscribe();
    this.editEmployeeSub$.unsubscribe();
  }
}
