import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { RouterModule } from '@angular/router';
import { reportsRoutes } from './reports.routes';
import { FinancialModule } from './financial/financial.module';
import { RentalModule } from './rental/rental.module';
import { AssociationModule } from './association/association.module';
import { PropertyModule } from './property/property.module';
import { TransactionModule } from './transaction/transaction.module';
import { ComplianceModule } from './compliance/compliance.module';
import { TaskModule } from './task/task.module';

@NgModule({
  imports: [
    CommonModule,
    FinancialModule,
    RentalModule,
    AssociationModule,
    PropertyModule,
    TransactionModule,
    ComplianceModule,
    TaskModule,
    RouterModule.forChild(reportsRoutes)
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
