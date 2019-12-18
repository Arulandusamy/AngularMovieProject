import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AlertService} from '../service/alert.service'
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HomeComponent],
  providers:[AlertService]
})
export class HomeModule { }
