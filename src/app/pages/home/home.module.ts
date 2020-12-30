import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrandsComponent } from './components/brands/brands.component';

const components = [
  HomeComponent,
  HeaderComponent
];
const modules = [
  CommonModule,
  SharedModule,
  HomeRoutingModule
]


@NgModule({
  declarations: [
    ...components,
    BrandsComponent
   ],
  imports: [
    ...modules,
  ],
    exports: [
    ...components
  ]
})
export class HomeModule { }
