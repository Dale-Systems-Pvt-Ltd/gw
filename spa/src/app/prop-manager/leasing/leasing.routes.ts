import { Routes } from '@angular/router';
import { LeasingComponent } from './leasing.component';


export const leasingRoutes: Routes = [
    {path: 'propmgr/leasing', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: LeasingComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
