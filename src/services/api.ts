import axios from 'axios';

const API_KEY = 'QFKW1CW-TWW4TBX-JC2MFGJ-YSGKK5C';
const BASE_URL = 'https://api.kinonpoisk.dev';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-API-KEY': API_KEY,
    },
});

export const fetchMovies = (page: number) => {
    return api.get('/', {
        params: {page, pageSize: 50}
    })
}

export const fetchMovieDetails = (id: number) => {
    return api.get('/${id}');
};

/* export const fetchMoviesByFilter = () */

