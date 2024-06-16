import axios from 'axios';

const API_KEY = 'QFKW1CW-TWW4TBX-JC2MFGJ-YSGKK5C';
const BASE_URL = 'https://api.kinopoisk.dev';

export const fetchMovies = (page: number) =>
  axios.get(`${BASE_URL}/v1/movie?page=${page}&limit=50`, {
    headers: {
      'X-API-KEY': API_KEY,
    },
  });

export const fetchMoviesByFilter = (genre?: string, rating?: number, year?: number, page = 1) => {
  const params: any = {
    genre,
    rating,
    year,
    page,
    limit: 50,
  };
  Object.keys(params).forEach(key => params[key] === undefined && delete params[key]);

  return axios.get(`${BASE_URL}/v1/movie`, {
    params,
    headers: {
      'X-API-KEY': API_KEY,
    },  
  });
};

export const fetchMovieDetails = (id: string) =>
  axios.get(`${BASE_URL}/v1/movie/${id}`, {
    headers: {
      'X-API-KEY': API_KEY,
    },
  });

  

