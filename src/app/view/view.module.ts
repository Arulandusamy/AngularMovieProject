import { NgModule } from '@angular/core';
import { ViewComponent } from './view.component';
import { RouterModule } from '@angular/router';
import { MovieService} from '../service/movie.service'
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material' 
CommonModule
@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule, RouterModule,BrowserModule,
    MatTableModule
  ],
  exports: [ViewComponent],
  providers:[MovieService]
})
export class ViewModule { }
