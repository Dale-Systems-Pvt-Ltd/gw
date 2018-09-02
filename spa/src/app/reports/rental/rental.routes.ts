import { Routes } from '@angular/router';
import { RentalComponent } from './rental.component';
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


export const rentalRoutes: Routes = [
    {path: 'reports/rental', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: RentalComponent},
        {path: 'ct', component: CurrentTenantsComponent},
        {path: 'dt', component: DelinquentTenantsComponent},
        {path: 'le', component: LeasesEndingComponent},
        {path: 'la', component: LeasingAgentComponent},
        {path: 'rp', component: RentPaidComponent},
        {path: 'rr', component: RentRollComponent},
        {path: 'ripc', component: RentersInsurancePlusComplianceComponent},
        {path: 'tn', component: TenantNotesComponent},
        {path: 'ts', component: TenantStatementComponent},
        {path: 'tv', component: TenantVehiclesComponent},
        {path: 'ul', component: UnitListingsComponent},
        {path: 'vu', component: VacantUnitsComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
