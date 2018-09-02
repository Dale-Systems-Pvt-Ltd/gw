import { Routes } from '@angular/router';
import { PropManagerComponent } from './prop-manager.component';

export const propManagerRoutes: Routes = [
    {path: 'propmgr', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: PropManagerComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
