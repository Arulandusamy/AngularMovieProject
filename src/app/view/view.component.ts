import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MovieService} from '../service/movie.service'
import {MatTableDataSource } from '@angular/material';
@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})


export class ViewComponent implements OnInit {
 movieData:any;
 displayedColumns: string[] = ['id', 'Name', 'Year', 'Ratings','Rated','Action'];
 dataSource:any;
  constructor(private movieService: MovieService
    ) { }

  ngOnInit() {
    this.movieService.getAll().subscribe(data =>{
        this.movieData = data; 
        this.dataSource = new MatTableDataSource(this.movieData);
    console.log(this.movieData);
});

}

onClick(movie:any,value:any){
  this.movieService.delete(movie.id).subscribe(data=>{
    this.movieData.splice(value, 1);
    this.dataSource = new MatTableDataSource(this.movieData);
    alert("Movie details are deleted successfully");
  });
}
}
