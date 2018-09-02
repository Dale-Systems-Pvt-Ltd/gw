import { Routes } from '@angular/router';
import { TransactionComponent } from './transaction.component';
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

export const transactionRoutes: Routes = [
    {path: 'reports/transaction', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: TransactionComponent},
        {path: 'bt', component: BankTransactionComponent},
        {path: 'btsu', component: BasicTenantScreeningUsageComponent },
        {path: 'cd', component: CheckDetailsComponent},
        {path: 'ela', component: EleaseActivityComponent},
        {path: 'epa', component: EpayActivityComponent},
        {path: 'ptsu', component: PremiumTenantScreeningUsageComponent},
        {path: 'rcpu', component: RemoteCheckPrintingUsageComponent},
        {path: 'ripb', component: RentersInsurancePlusBillingComponent},
        {path: 'se', component: ScheduledEftsComponent},
        {path: 'tdba', component: TransactionDetailsByAccountComponent},
        {path: 'ubbyp', component: UnpaidBillsByPropertyComponent },
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
