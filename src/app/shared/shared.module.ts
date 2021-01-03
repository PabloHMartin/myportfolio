import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';
import { CirclesComponent } from './components/circles/circles.component';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';
import { CformComponent } from './components/cform/cform.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  ShellComponent,
  NavbarComponent,
  CirclesComponent,
  TitleComponent,
  FooterComponent,
  CformComponent
];
const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule
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
