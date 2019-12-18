import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService} from '../service/alert.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
message:any;
  constructor(private alert: AlertService
    ) { }

  ngOnInit() {
    this.alert.getMessage().subscribe(data =>{
       // this.message = JSON.parse(data);
    console.log(data);
});

}
}
