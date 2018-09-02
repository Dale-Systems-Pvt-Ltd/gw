import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { RouterModule } from '@angular/router';
import { maintenanceRoutes } from './maintenance.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(maintenanceRoutes)
  ],
  declarations: [MaintenanceComponent]
})
export class MaintenanceModule { }
