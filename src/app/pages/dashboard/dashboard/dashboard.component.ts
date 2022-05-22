import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesResponse } from 'src/app/interfaces/movies-response';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  moviesResult!: Movie[];
  favMovies: Movie[];

  constructor(private movieService: MovieService) {
    this.favMovies = [];
  }

  ngOnInit(): void {}

  loadMovies(query: string) {
    this.movieService.getMovies(query).subscribe((response: MoviesResponse) => {
      this.moviesResult = response.data.results;
    });
  }

  addFavMovie(movie: Movie) {
    movie.favoriteLog = new Date();
    this.favMovies.push(movie);
  }

  deleteMovie(movieId: string) {
    const movieIndex = this.favMovies.findIndex(
      (movie: Movie) => movie.id === movieId
    );
    this.favMovies.splice(movieIndex, 1);
  }
}
