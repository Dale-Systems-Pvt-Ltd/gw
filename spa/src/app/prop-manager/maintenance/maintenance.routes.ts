import { Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance.component';

export const maintenanceRoutes: Routes = [
    {path: 'propmgr/maint', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: MaintenanceComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
