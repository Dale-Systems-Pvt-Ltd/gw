import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';

export const authRoutes: Routes = [
    {path: 'auth', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: AuthComponent},
        {path: 'register', component: RegisterComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
