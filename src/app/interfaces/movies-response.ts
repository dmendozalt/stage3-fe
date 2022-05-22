import { Movie } from './movie';

export interface MoviesResponse {
  error: boolean;
  data: {
    results: Movie[];
    totalResults: number;
  };
}
