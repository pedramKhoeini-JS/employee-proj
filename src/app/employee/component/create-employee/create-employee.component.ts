import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dictionary } from 'src/app/dictionary/dictionary';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent {
  dictionary = dictionary;
  employee = new Employee();
  @Input() visible = false;

  @Output() hideDialog = new EventEmitter();
  @Output() onCreateEmployeeClick = new EventEmitter<Employee>();

  onHideDialog() {
    this.visible = false;
    this.hideDialog.emit();
  }

  onSubmit(): void {
    this.onCreateEmployeeClick.emit(this.employee);
    this.onHideDialog();
  }
}
