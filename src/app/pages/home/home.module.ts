import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrandsComponent } from './components/brands/brands.component';
import { AboutComponent } from './components/about/about.component';
import { CtaComponent } from './components/cta/cta.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SwiperModule } from 'swiper/angular';
import { CardComponent } from './components/projects/components/card/card.component';

const components = [
  HomeComponent,
  HeaderComponent,
  BrandsComponent,
  AboutComponent,
  CtaComponent,
  SkillsComponent,
  ProjectsComponent,
  CardComponent
];
const modules = [
  CommonModule,
  SharedModule,
  HomeRoutingModule,
  SwiperModule
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
export class HomeModule { }
