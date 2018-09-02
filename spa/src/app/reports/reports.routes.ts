import { Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

export const reportsRoutes: Routes = [
    {path: 'reports', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: ReportsComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
