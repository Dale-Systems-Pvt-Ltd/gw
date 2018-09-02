import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from './communication.component';
import { RouterModule } from '@angular/router';
import { communicationRoutes } from './communication.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(communicationRoutes)
  ],
  declarations: [CommunicationComponent]
})
export class CommunicationModule { }
