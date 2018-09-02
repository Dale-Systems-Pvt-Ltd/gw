import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialComponent } from './financial.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { RouterModule } from '@angular/router';
import { financialRoutes } from './financial.routes';
import { BudgetVsActualComponent } from './budget-vs-actual/budget-vs-actual.component';
import { CashFlowStatementComponent } from './cash-flow-statement/cash-flow-statement.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { IncomeStatementComponent } from './income-statement/income-statement.component';
import { ManagementIncomeComponent } from './management-income/management-income.component';
import { PropertyStatementComponent } from './property-statement/property-statement.component';
import { RentalOwnerStatementComponent } from './rental-owner-statement/rental-owner-statement.component';
import { RentalOwnerEndingBalancesComponent } from './rental-owner-ending-balances/rental-owner-ending-balances.component';
import { TrialBalanceComponent } from './trial-balance/trial-balance.component';
import { VendorLedgerComponent } from './vendor-ledger/vendor-ledger.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(financialRoutes),
  ],
  declarations: [
    FinancialComponent,
    BalanceSheetComponent,
    BudgetVsActualComponent,
    CashFlowStatementComponent,
    GeneralLedgerComponent,
    IncomeStatementComponent,
    ManagementIncomeComponent,
    PropertyStatementComponent,
    RentalOwnerStatementComponent,
    RentalOwnerEndingBalancesComponent,
    TrialBalanceComponent,
    VendorLedgerComponent
  ]
})
export class FinancialModule { }
