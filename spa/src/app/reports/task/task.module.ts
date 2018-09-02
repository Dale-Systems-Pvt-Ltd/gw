import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { RouterModule } from '@angular/router';
import { taskRoutes } from './task.routes';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { OpenTasksComponent } from './open-tasks/open-tasks.component';
import { TaskPerformanceComponent } from './task-performance/task-performance.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoutes)
  ],
  declarations: [
    TaskComponent,
    CompletedTasksComponent,
    OpenTasksComponent,
    TaskPerformanceComponent,
    WorkOrdersComponent
  ]
})
export class TaskModule { }
