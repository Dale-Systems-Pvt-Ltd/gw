import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { RouterModule } from '@angular/router';
import { taskRoutes } from './tasks.routes';
import { IncomingRequestsComponent } from './incoming-requests/incoming-requests.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { RecurringTasksComponent } from './recurring-tasks/recurring-tasks.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoutes)
  ],
  declarations: [
    TasksComponent,
    IncomingRequestsComponent,
    MyTasksComponent,
    AllTasksComponent,
    RecurringTasksComponent
  ]
})
export class TasksModule { }
