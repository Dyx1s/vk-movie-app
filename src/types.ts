/* export interface Movie {
    id: number;
    name: string;
    year: number;
    rating: number;
}

export interface MovieDetails extends Movie {
    description: string;
    genres: { genre: string }[];
    realesed: string; 
    rating: number;
} */

export interface Movie {
    id: number;
    name: string;
    poster: { url: string };
    year: number;
    rating: { kp: number };
    description?: string;
    releaseDate?: string;
    genres: [{name: string}];
  }
  