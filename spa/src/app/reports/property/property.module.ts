import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { EventHistoryComponent } from './event-history/event-history.component';
import { LateFeePolicyComponent } from './late-fee-policy/late-fee-policy.component';
import { MeterReadingsComponent } from './meter-readings/meter-readings.component';
import { PaymentReminderPolicyComponent } from './payment-reminder-policy/payment-reminder-policy.component';
import { RouterModule } from '@angular/router';
import { propertyRoutes } from './property.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(propertyRoutes)
  ],
  declarations: [
    PropertyComponent,
    AppliancesComponent,
    EventHistoryComponent,
    LateFeePolicyComponent,
    MeterReadingsComponent,
    PaymentReminderPolicyComponent
  ]
})
export class PropertyModule { }
