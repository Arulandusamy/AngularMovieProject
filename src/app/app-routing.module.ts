import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesModule } from './movie/movie.module';
import {MoviesComponent } from './movie/movie.component'
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ViewModule } from './view/view.module';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'register', component: MoviesComponent},
  {path:'view', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), MoviesModule,HomeModule,ViewModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
