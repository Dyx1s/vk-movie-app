import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import { Movie } from '../types';
import { fetchMovies, fetchMoviesByFilter } from '../services/api';
import MovieList from '../components/MovieList';
import Filter from '../components/Filter';


const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchMovies(page).then(response => {
      setMovies(pervMovies => [...pervMovies, ...response.data.docs]);
    });
  }, [page]);

  const handleFilter = (genre?: string, rating?: number, year?: number) => {
    fetchMoviesByFilter(genre, rating, year, page).then(response => {
      setMovies(pervMovies => [...pervMovies, ...response.data.docs]);
    });
  }


  return (
    <Container className='home-container'>
      <Filter onFilter={handleFilter}/>
      <MovieList
        movies={movies} 
        page={page} 
        setPage={setPage}
      />
    </Container>
  )
}

export default HomePage;
