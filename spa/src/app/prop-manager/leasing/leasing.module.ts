import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeasingComponent } from './leasing.component';
import { RouterModule } from '@angular/router';
import { leasingRoutes } from './leasing.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(leasingRoutes)
  ],
  declarations: [LeasingComponent]
})
export class LeasingModule { }
