import { Routes } from '@angular/router';
import { CommunicationComponent } from './communication.component';


export const communicationRoutes: Routes = [
    {path: 'propmgr/comm', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: CommunicationComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
