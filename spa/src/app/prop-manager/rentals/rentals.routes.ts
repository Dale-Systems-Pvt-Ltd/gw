import { Routes } from '@angular/router';
import { RentalsComponent } from './rentals.component';
import { PropertiesComponent } from './properties/properties.component';
import { RentRollComponent } from '../../reports/rental/rent-roll/rent-roll.component';
import { RentalOwnersComponent } from './rental-owners/rental-owners.component';
import { TenantsComponent } from './tenants/tenants.component';
import { OutstandingBalancesComponent } from './outstanding-balances/outstanding-balances.component';

export const rentalsRoutes: Routes = [
    {path: 'propmgr/rentals', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: RentalsComponent},
        {path: 'ob', component: OutstandingBalancesComponent},
        {path: 'p', component: PropertiesComponent},
        {path: 'rr', component: RentRollComponent },
        {path: 'ro', component: RentalOwnersComponent},
        {path: 't', component: TenantsComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
