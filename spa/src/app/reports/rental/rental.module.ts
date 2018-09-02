import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalComponent } from './rental.component';
import { RouterModule } from '@angular/router';
import { rentalRoutes } from './rental.routes';
import { CurrentTenantsComponent } from './current-tenants/current-tenants.component';
import { DelinquentTenantsComponent } from './delinquent-tenants/delinquent-tenants.component';
import { LeasesEndingComponent } from './leases-ending/leases-ending.component';
import { LeasingAgentComponent } from './leasing-agent/leasing-agent.component';
import { RentPaidComponent } from './rent-paid/rent-paid.component';
import { RentRollComponent } from './rent-roll/rent-roll.component';
import { RentersInsurancePlusComplianceComponent } from './renters-insurance-plus-compliance/renters-insurance-plus-compliance.component';
import { TenantNotesComponent } from './tenant-notes/tenant-notes.component';
import { TenantStatementComponent } from './tenant-statement/tenant-statement.component';
import { TenantVehiclesComponent } from './tenant-vehicles/tenant-vehicles.component';
import { UnitListingsComponent } from './unit-listings/unit-listings.component';
import { VacantUnitsComponent } from './vacant-units/vacant-units.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rentalRoutes)
  ],
  declarations: [
    RentalComponent,
    CurrentTenantsComponent,
    DelinquentTenantsComponent,
    LeasesEndingComponent,
    LeasingAgentComponent,
    RentPaidComponent,
    RentRollComponent,
    RentersInsurancePlusComplianceComponent,
    TenantNotesComponent,
    TenantStatementComponent,
    TenantVehiclesComponent,
    UnitListingsComponent,
    VacantUnitsComponent
  ]
})
export class RentalModule { }
