import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
   { path: ':id', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
