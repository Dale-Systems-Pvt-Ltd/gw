import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropManagerComponent } from './prop-manager.component';
import { AccountingModule } from './accounting/accounting.module';
import { AssociationsModule } from './associations/associations.module';
import { CommunicationModule } from './communication/communication.module';
import { LeasingModule } from './leasing/leasing.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { RentalsModule } from './rentals/rentals.module';
import { TasksModule } from './tasks/tasks.module';
import { RouterModule } from '@angular/router';
import { propManagerRoutes } from './prop-manager.routes';

@NgModule({
  imports: [
    CommonModule,
    AccountingModule,
    AssociationsModule,
    CommunicationModule,
    LeasingModule,
    MaintenanceModule,
    TasksModule,
    RentalsModule,
    RouterModule.forChild(propManagerRoutes)
  ],
  declarations: [PropManagerComponent]
})
export class PropManagerModule { }
