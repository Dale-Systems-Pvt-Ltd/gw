import { Routes } from '@angular/router';
import { AssociationsComponent } from './associations.component';


export const associationsRoutes: Routes = [
    {path: 'propmgr/assoc', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: AssociationsComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
