import { Routes } from '@angular/router';
import { PropertyComponent } from './property.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { EventHistoryComponent } from './event-history/event-history.component';
import { LateFeePolicyComponent } from './late-fee-policy/late-fee-policy.component';
import { MeterReadingsComponent } from './meter-readings/meter-readings.component';
import { PaymentReminderPolicyComponent } from './payment-reminder-policy/payment-reminder-policy.component';


export const propertyRoutes: Routes = [
    {path: 'reports/property', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: PropertyComponent},
        {path: 'a', component: AppliancesComponent},
        {path: 'eh', component: EventHistoryComponent },
        {path: 'lfp', component: LateFeePolicyComponent },
        {path: 'mr', component: MeterReadingsComponent},
        {path: 'prp', component: PaymentReminderPolicyComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
