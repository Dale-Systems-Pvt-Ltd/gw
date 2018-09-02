import { Routes } from '@angular/router';
import { AccountingComponent } from './accounting.component';

export const accountingRoutes: Routes = [
    {path: 'propmgr/accounting', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: AccountingComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
