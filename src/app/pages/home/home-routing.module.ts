import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class HomeRoutingModule { }
