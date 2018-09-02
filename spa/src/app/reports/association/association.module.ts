import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociationComponent } from './association.component';
import { RouterModule } from '@angular/router';
import { associationRoutes } from './association.routes';
import { AssociationOwnerNotesComponent } from './association-owner-notes/association-owner-notes.component';
import { AssociationOwnerStatementComponent } from './association-owner-statement/association-owner-statement.component';
import { AssociationOwnerVehiclesComponent } from './association-owner-vehicles/association-owner-vehicles.component';
import { CurrentAssociationOwnersComponent } from './current-association-owners/current-association-owners.component';
import { DelinquentAssociationOwnersComponent } from './delinquent-association-owners/delinquent-association-owners.component';
import { RecurringChargesComponent } from './recurring-charges/recurring-charges.component';
import { ViolationsComponent } from './violations/violations.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(associationRoutes)
  ],
  declarations: [
    AssociationComponent,
    AssociationOwnerNotesComponent,
    AssociationOwnerStatementComponent,
    AssociationOwnerVehiclesComponent,
    CurrentAssociationOwnersComponent,
    DelinquentAssociationOwnersComponent,
    RecurringChargesComponent,
    ViolationsComponent
  ]
})
export class AssociationModule { }
