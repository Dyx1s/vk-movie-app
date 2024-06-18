import React, { useState, useEffect } from 'react';
import { Container, Typography, Pagination } from '@mui/material';
/* import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter'; */
import MovieList from '../components/MovieList';
import { fetchMovies } from '../services/api';
import { Movie, FilterOptions } from '../types/types';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({ genres: [], rating: { kp: 0 }, year: 0 });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(page, query, filters.genres, filters.rating.kp, filters.year);
      setMovies(data.docs);
      setTotalPages(data.pages);
    };
    getMovies();
  }, [query, filters, page]);

  const handleFilterChange = (name: keyof FilterOptions, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <Container className="home-container">
      <Typography variant="h2">Movie Database</Typography>
      {/* <SearchBar query={query} onSearch={setQuery} />
      <Filter filters={filters} onFilterChange={handleFilterChange} /> */}
      <MovieList movies={movies} page={page} setPage={setPage}/>
      
    </Container>
  );
};

export default HomePage;
