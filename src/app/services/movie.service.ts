import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MoviesResponse } from '../interfaces/movies-response';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(search: string): Observable<MoviesResponse> {
    const ENDPOINT: string = `${environment.URL}/?s=${search}&apikey=${environment.APIKEY}`;
    return this.http.get<any>(ENDPOINT).pipe(
      map((resp) => {
        const response = {
          error: resp.Response !== 'True',
          data: {
            results: resp.Search?.map((movie: any) => {
              const newMovieFormat = {
                id: movie.imdbID,
                poster:
                  movie.Poster !== 'N/A'
                    ? movie.Poster
                    : 'https://santandercycling.com/wp-content/themes/claue/assets/images/placeholder.png',
                title: movie.Title,
                type: movie.Type,
                year: movie.Year,
                comments: '',
                favoriteLog: null,
              };
              return newMovieFormat;
            }),
            totalResults: resp.totalResults,
          },
        };
        return response;
      })
    );
  }
}
