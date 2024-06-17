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
    id: string;
    name: string;
    rating: { kp: number };
    year: number;
    poster: { url: string };
    description: string;
    genres: { name: string }[];
}

export interface ApiResponse {
    docs: Movie[];
    pages: number;
}

export interface FilterOptions {
    genres: { name: string }[];
    rating: { kp: number };
    year: number;
}

export interface SearchQuery {
    query: string;
    filters: FilterOptions;
    page: number;
}

