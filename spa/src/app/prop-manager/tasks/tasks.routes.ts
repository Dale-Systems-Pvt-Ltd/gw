import { Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { IncomingRequestsComponent } from './incoming-requests/incoming-requests.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { RecurringTasksComponent } from './recurring-tasks/recurring-tasks.component';


export const taskRoutes: Routes = [
    {path: 'propmgr/tasks', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: TasksComponent},
        {path: 'ir', component: IncomingRequestsComponent},
        {path: 'mt', component: MyTasksComponent},
        {path: 'at', component: AllTasksComponent},
        {path: 'rt', component: RecurringTasksComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
