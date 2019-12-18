import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {

      URL:  any;
    constructor(private http: HttpClient) {
        this.URL = 'http://localhost:8006/v1/movie';
     }

    getAll() {
        console.log("Firing" + this.URL);
        return this.http.get<Movie[]>(this.URL);
    }

    getById(id: number) {
        return this.http.get(this.URL + id);
    }

    register(movie: Movie) {
        console.log("user form Data-->" + JSON.stringify(movie));
        return this.http.post(this.URL, movie);
    }

    update(movie: Movie) {
        return this.http.put(this.URL + movie.id, movie);
    }

    delete(id: number) {
        return this.http.delete(this.URL +"/id/" + id);
    }
}