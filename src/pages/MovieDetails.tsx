import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import { Container, Typography, Box } from '@mui/material';
import { Movie } from '../types/types';
import '../styles/MovieDetails.css';

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetchMovieDetails(id || '').then(response => {
      setMovie(response.data);
    }).catch(error => {
      console.error('Error fetching movie details:', error);
    });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="movie-details-container">
      <Box display="flex" flexDirection="column" alignItems="center">
        <img src={movie.poster.url} alt={movie.name} className="movie-details-image" />
        <Box className="movie-details-content">
          <Typography variant="h4">{movie.name}</Typography>
          <Typography variant="body1">{movie.description}</Typography>
          <Typography variant="body2">Рейтинг: {movie.rating.kp}</Typography>
          <Typography variant="body2">Дата выхода: {movie.year}</Typography>
          <Typography variant="body2">Жанр: {movie.genres.map(genre => genre.name).join(', ')}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default MovieDetails;
