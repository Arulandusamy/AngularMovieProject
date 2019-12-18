import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movie.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieService} from '../service/movie.service'
import { AlertService} from '../service/alert.service'
@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule, RouterModule,FormsModule, ReactiveFormsModule
  ],
  exports: [MoviesComponent],
  providers:[MovieService,AlertService]
})
export class MoviesModule { }
