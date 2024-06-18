import axios from 'axios';
import { ApiResponse, Movie } from '../types/types';

const API_KEY = '7THRVK7-5Z0MB59-JPFESA4-XEBVCRM';
const BASE_URL = 'https://api.kinopoisk.dev';

export const fetchMoviesList = async(
  page: number,
  genres: { name: string }[],
  ratings: number[],
  year: number
): Promise<ApiResponse> => {
  
  const response = await axios.get<ApiResponse>(
    ``
  )
  return response.data
}

export const fetchMovieById = async (id: string): Promise<Movie> => {
  const response = await axios.get<Movie>(
    ``
  )
  return response.data
}