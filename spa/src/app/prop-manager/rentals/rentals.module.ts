import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalsComponent } from './rentals.component';
import { RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { RentRollComponent } from './rent-roll/rent-roll.component';
import { RentalOwnersComponent } from './rental-owners/rental-owners.component';
import { TenantsComponent } from './tenants/tenants.component';
import { OutstandingBalancesComponent } from './outstanding-balances/outstanding-balances.component';
import { rentalsRoutes } from './rentals.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rentalsRoutes)
  ],
  declarations: [
    OutstandingBalancesComponent,
    RentalsComponent,
    PropertiesComponent,
    RentRollComponent,
    RentalOwnersComponent,
    TenantsComponent
  ]
})
export class RentalsModule { }
