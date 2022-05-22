import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-dashboard-favs',
  templateUrl: './dashboard-favs.component.html',
  styleUrls: ['./dashboard-favs.component.scss'],
})
export class DashboardFavsComponent implements OnInit {
  @Input() favMovies: Movie[];
  @Output() deleteFavMovie = new EventEmitter<string>();

  displayedColumns: string[] = [
    'poster',
    'title',
    'type',
    'year',
    'comments',
    'favoriteLog',
    'action',
  ];

  constructor() {
    this.favMovies = [];
  }

  ngOnInit(): void {}

  deleteFav(movieId: string) {
    this.deleteFavMovie.emit(movieId);
  }
}
