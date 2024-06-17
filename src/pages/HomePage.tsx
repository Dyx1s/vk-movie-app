import React, { useState, useEffect } from 'react';
import { Container, Typography, Pagination } from '@mui/material';

import Filter from '../components/Filter';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../services/api';
import { Movie, FilterOptions, ApiResponse } from '../types';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({ genres: [], rating: { kp: 0 }, year: 0 });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data: ApiResponse = await fetchMovies(page, query, filters.genres, filters.rating.kp, filters.year);
        setMovies(data.docs);
        setTotalPages(data.pages);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    getMovies();
  }, [query, filters, page]);

/*   const handleFilterChange = (name: keyof FilterOptions, value: any) => {
    setFilters((prevFilters: FilterOptions) => ({
      ...prevFilters,
      [name]: value,
    }));
  }; */

  return (
    <Container className="home-container">
      <Typography variant="h2">Movie Database</Typography>
      <SearchBar  />
      <Filter  />
      <MovieList movies={movies} page={page} setPage={setPage}/>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, value) => setPage(value)}
        color="primary"
        style={{ marginTop: '20px' }}
      />
    </Container>
  );
};

export default Home;
