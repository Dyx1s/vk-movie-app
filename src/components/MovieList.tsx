import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Movie } from '../types';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

interface MovieListProps {
  movies: Movie[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const MovieList: React.FC<MovieListProps> = ({ movies, page, setPage }) => {
  
  //надо понять как сделать пагинацию
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        {movies.slice(0, page * 10).map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;