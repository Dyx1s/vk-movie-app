import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { Movie } from '../types';
import { fetchMovies, fetchMoviesByFilter } from '../services/api';
import MovieList from '../components/MovieList';


const HomePage: React.FC = () => {

  
  return (
    <Container className='home-container'>
      <MovieList />
    </Container>
  )
}

export default HomePage;
