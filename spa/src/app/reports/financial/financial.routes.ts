import { Routes } from '@angular/router';
import { FinancialComponent } from './financial.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { BudgetVsActualComponent } from './budget-vs-actual/budget-vs-actual.component';
import { CashFlowStatementComponent } from './cash-flow-statement/cash-flow-statement.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { IncomeStatementComponent } from './income-statement/income-statement.component';
import { ManagementIncomeComponent } from './management-income/management-income.component';
import { PropertyStatementComponent } from './property-statement/property-statement.component';
import { RentalOwnerEndingBalancesComponent } from './rental-owner-ending-balances/rental-owner-ending-balances.component';
import { RentalOwnerStatementComponent } from './rental-owner-statement/rental-owner-statement.component';
import { TrialBalanceComponent } from './trial-balance/trial-balance.component';
import { VendorLedgerComponent } from './vendor-ledger/vendor-ledger.component';

export const financialRoutes: Routes = [
    {path: 'reports/financial', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: FinancialComponent},
        {path: 'bs', component: BalanceSheetComponent},
        {path: 'ba', component: BudgetVsActualComponent},
        {path: 'cf', component: CashFlowStatementComponent},
        {path: 'gl', component: GeneralLedgerComponent},
        {path: 'is', component: IncomeStatementComponent},
        {path: 'mi', component: ManagementIncomeComponent},
        {path: 'ps', component: PropertyStatementComponent},
        {path: 'roeb', component: RentalOwnerEndingBalancesComponent},
        {path: 'ros', component: RentalOwnerStatementComponent},
        {path: 'tb', component: TrialBalanceComponent},
        {path: 'vl', component: VendorLedgerComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
