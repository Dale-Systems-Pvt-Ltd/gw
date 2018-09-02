import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociationsComponent } from './associations.component';
import { RouterModule } from '@angular/router';
import { associationsRoutes } from './associations.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(associationsRoutes)
  ],
  declarations: [AssociationsComponent]
})
export class AssociationsModule { }
