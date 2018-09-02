import { Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { OpenTasksComponent } from './open-tasks/open-tasks.component';
import { TaskPerformanceComponent } from './task-performance/task-performance.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';


export const taskRoutes: Routes = [
    {path: 'reports/task', children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: TaskComponent},
        {path: 'ct', component: CompletedTasksComponent},
        {path: 'ot', component: OpenTasksComponent},
        {path: 'tp', component: TaskPerformanceComponent},
        {path: 'wo', component: WorkOrdersComponent},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]}
];
