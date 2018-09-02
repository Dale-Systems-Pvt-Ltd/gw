import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingComponent } from './accounting.component';
import { RouterModule } from '@angular/router';
import { accountingRoutes } from './accounting.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountingRoutes)
  ],
  declarations: [AccountingComponent]
})
export class AccountingModule { }
