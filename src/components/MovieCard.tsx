import React from 'react'
import { Movie } from '../types';
import '../styles/MovieCard.css';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


interface MovieCardProps {
  movie: Movie;
}


const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  }
  return (
    <Card className='movie-card'>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="140"
          alt={movie.name}
          image={movie.poster.url}
        />
        <CardContent>
          <Typography variant="h5">
            {movie.name}
          </Typography>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="body2" color="textSecondary">
              Дата выхода:{movie.year}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Рейтинг: {movie.rating.kp}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MovieCard
