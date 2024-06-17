import axios from 'axios';
import { ApiResponse } from '../types';

const API_KEY = '1WGH8KG-9E9MFT9-MA28JDS-4R114Z4';
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
        genres: genres.map(g => g.name).join(','),
        'rating.kp': rating,
        year,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};