import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplianceComponent } from './compliance.component';
import { RouterModule } from '@angular/router';
import { complianceRoutes } from './compliance.routes';
import { BankAccountBalanceBreakdownComponent } from './bank-account-balance-breakdown/bank-account-balance-breakdown.component';
import { BankReconciliationComponent } from './bank-reconciliation/bank-reconciliation.component';
import { TrustReconciliationComponent } from './trust-reconciliation/trust-reconciliation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(complianceRoutes)
  ],
  declarations: [
    ComplianceComponent,
    BankAccountBalanceBreakdownComponent,
    BankReconciliationComponent,
    TrustReconciliationComponent
  ]
})
export class ComplianceModule { }
