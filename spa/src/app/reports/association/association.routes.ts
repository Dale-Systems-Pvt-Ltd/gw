import { Routes } from '@angular/router';
import { AssociationComponent } from './association.component';
import { AssociationOwnerNotesComponent } from './association-owner-notes/association-owner-notes.component';
import { AssociationOwnerStatementComponent } from './association-owner-statement/association-owner-statement.component';
import { AssociationOwnerVehiclesComponent } from './association-owner-vehicles/association-owner-vehicles.component';
import { CurrentAssociationOwnersComponent } from './current-association-owners/current-association-owners.component';
import { DelinquentAssociationOwnersComponent } from './delinquent-association-owners/delinquent-association-owners.component';
import { RecurringChargesComponent } from './recurring-charges/recurring-charges.component';
import { ViolationsComponent } from './violations/violations.component';

export const associationRoutes: Routes = [
    {path: 'reports/association', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: AssociationComponent},
        {path: 'aon', component: AssociationOwnerNotesComponent},
        {path: 'aos', component: AssociationOwnerStatementComponent},
        {path: 'aov', component: AssociationOwnerVehiclesComponent},
        {path: 'cao', component: CurrentAssociationOwnersComponent},
        {path: 'dao', component: DelinquentAssociationOwnersComponent},
        {path: 'rc', component: RecurringChargesComponent},
        {path: 'v', component: ViolationsComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
