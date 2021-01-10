import { ProjectComponent } from './project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: ProjectComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class ProjectRoutingModule { }
