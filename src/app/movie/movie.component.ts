import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MovieService} from '../service/movie.service'
import { AlertService} from '../service/alert.service'

@Component({
  selector: 'movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

/**
 * {
  "movieName": "ererer",
  "year": "errerer",
  "ratings": "erererer",
  "rated": "erererer"
}
 */
export class MoviesComponent implements OnInit {

    movieForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private movieService: MovieService,
      private alertService: AlertService) { }

  ngOnInit() {
      this.movieForm = this.formBuilder.group({
        movieName: ['', Validators.required],
        year: ['', Validators.required],
        ratings: ['', Validators.required],
        rated: ['', [Validators.required, Validators.minLength(1)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.movieForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.movieForm.invalid) {
          return;
      }

      this.loading = true;
      this.movieService.register(this.movieForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  alert("Movie Added Successfully..");
                  this.alertService.success('Movie Added successfully', true);
                  this.router.navigate(['']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
