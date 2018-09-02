import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { RouterModule } from '@angular/router';
import { transactionRoutes } from './transaction.routes';
import { BankTransactionComponent } from './bank-transaction/bank-transaction.component';
import { BasicTenantScreeningUsageComponent } from './basic-tenant-screening-usage/basic-tenant-screening-usage.component';
import { CheckDetailsComponent } from './check-details/check-details.component';
import { EleaseActivityComponent } from './elease-activity/elease-activity.component';
import { EpayActivityComponent } from './epay-activity/epay-activity.component';
import { PremiumTenantScreeningUsageComponent } from './premium-tenant-screening-usage/premium-tenant-screening-usage.component';
import { RemoteCheckPrintingUsageComponent } from './remote-check-printing-usage/remote-check-printing-usage.component';
import { RentersInsurancePlusBillingComponent } from './renters-insurance-plus-billing/renters-insurance-plus-billing.component';
import { ScheduledEftsComponent } from './scheduled-efts/scheduled-efts.component';
import { TransactionDetailsByAccountComponent } from './transaction-details-by-account/transaction-details-by-account.component';
import { UnpaidBillsByPropertyComponent } from './unpaid-bills-by-property/unpaid-bills-by-property.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(transactionRoutes)
  ],
  declarations: [
    TransactionComponent,
    BankTransactionComponent,
    BasicTenantScreeningUsageComponent,
    CheckDetailsComponent,
    EleaseActivityComponent,
    EpayActivityComponent,
    PremiumTenantScreeningUsageComponent,
    RemoteCheckPrintingUsageComponent,
    RentersInsurancePlusBillingComponent,
    ScheduledEftsComponent,
    TransactionDetailsByAccountComponent,
    UnpaidBillsByPropertyComponent
  ]
})
export class TransactionModule { }
