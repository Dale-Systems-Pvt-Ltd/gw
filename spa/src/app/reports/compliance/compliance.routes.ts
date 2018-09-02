import { Routes } from '@angular/router';
import { ComplianceComponent } from './compliance.component';
import { BankAccountBalanceBreakdownComponent } from './bank-account-balance-breakdown/bank-account-balance-breakdown.component';
import { BankReconciliationComponent } from './bank-reconciliation/bank-reconciliation.component';
import { TrustReconciliationComponent } from './trust-reconciliation/trust-reconciliation.component';


export const complianceRoutes: Routes = [
    {path: 'reports/compliance', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: ComplianceComponent},
        {path: 'babb', component: BankAccountBalanceBreakdownComponent},
        {path: 'br', component: BankReconciliationComponent },
        {path: 'tr', component: TrustReconciliationComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
