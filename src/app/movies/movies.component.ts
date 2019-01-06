import {Component, OnInit} from '@angular/core';
import {Movie} from '../../models/movie';
import {fakeMovie} from '../fake-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: 'Star Wars',
    releaseYear: 1977
  };
  movies = fakeMovie;

  constructor() {
  }

  ngOnInit() {
  }

  // Action when select a Movie in list item
  selectedMovie: Movie;

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }
}
