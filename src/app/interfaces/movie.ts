export interface Movie {
  poster: string;
  title: string;
  type: string;
  year: string;
  selected: boolean;
  id: string;
  favoriteLog: Date | null;
  comments: string;
}
