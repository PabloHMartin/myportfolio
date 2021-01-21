import { SkillsComponent } from './components/skills/skills.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';
import { CirclesComponent } from './components/circles/circles.component';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';
import { CformComponent } from './components/cform/cform.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/projects/components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

const components = [
  ShellComponent,
  NavbarComponent,
  CirclesComponent,
  TitleComponent,
  FooterComponent,
  CformComponent,
  ProjectsComponent,
  CardComponent,
  AboutComponent,
  SkillsComponent
];
const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  SwiperModule
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
