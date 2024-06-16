import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types';
import { fetchMovies, fetchMoviesByFilter } from '../services/api';
import MovieList from '../components/MovieList';


const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchMovies(page).then(({ data: { docs } }) => {
      setMovies(docs);
    });
  }, [page]);


  return (
    <Container className='home-container'>
      <MovieList />
    </Container>
  )
}

export default HomePage;
