import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, ToastModule, DialogModule],
  exports: [ButtonModule, ToastModule, DialogModule],
})
export class PrimeNgModule {}
