import axios from 'axios';
import { ApiResponse } from '../types/types';

const API_KEY = '7THRVK7-5Z0MB59-JPFESA4-XEBVCRM';
const BASE_URL = 'https://api.kinopoisk.dev';

export const fetchMovies = async (page: number, query: string, genres: { name: string }[], rating: number, year: number): Promise<ApiResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/v1/movie`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
      params: {
        page,
        query,
        genres: genres.map((genre) => genre.name).join(','),
        /* rating: rating.toString(), */
        /* year: year.toString(), */
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = (id: string) =>
  axios.get(`${BASE_URL}/v1/movie/${id}`, {
    headers: {
      'X-API-KEY': API_KEY,
    },
  });

  

