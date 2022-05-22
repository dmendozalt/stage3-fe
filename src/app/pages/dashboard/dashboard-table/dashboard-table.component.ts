import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent implements OnInit, OnChanges {
  movieResultsForm!: FormGroup;
  @Input() movieDataSource!: Movie[];
  @Output() addFavMovie = new EventEmitter<Movie>();

  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.movieResultsForm = this.FormBuilder.group({
      movies: this.FormBuilder.array([]),
    });
  }

  ngOnChanges(): void {
    if (this.movieDataSource)
      this.movieDataSource.forEach((movieResult: Movie) => {
        this.getMovieForms.push(this.addMovieForm(movieResult));
      });
  }

  get getMovieForms() {
    return this.movieResultsForm.get('movies') as FormArray;
  }

  addMovieForm(movieResult: Movie) {
    return this.FormBuilder.group({
      poster: [movieResult.poster],
      title: [movieResult.title],
      type: [movieResult.type],
      year: [movieResult.year],
      comments: [movieResult.comments],
    });
  }

  favMovie(movieIndex: number) {
    const newFavMovie = this.movieDataSource[movieIndex];
    const modifiedMovie = this.getMovieForms.at(movieIndex).value;
    newFavMovie.title = modifiedMovie.title;
    newFavMovie.type = modifiedMovie.type;
    newFavMovie.year = modifiedMovie.year;
    newFavMovie.comments = modifiedMovie.comments;
    this.addFavMovie.emit(newFavMovie);
  }
}
