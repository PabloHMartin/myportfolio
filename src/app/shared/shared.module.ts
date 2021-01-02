import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';
import { CirclesComponent } from './components/circles/circles.component';
import { TitleComponent } from './components/title/title.component';

const components = [
  ShellComponent,
  NavbarComponent,
  CirclesComponent,
  TitleComponent
];
const modules = [
  CommonModule,
  RouterModule,
]


@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
