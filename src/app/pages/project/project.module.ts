import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { ProjectComponent } from './project.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [
  ProjectComponent
];

const modules = [
  CommonModule,
  SharedModule,
  ProjectRoutingModule
]

@NgModule({
  declarations: [
    ...components,
   ],
  imports: [
    ...modules,
  ],
    exports: [
    ...components
  ]
})
export class ProjectModule { }
