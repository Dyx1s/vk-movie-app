import React from 'react'
import { Movie } from '../types/types';
import '../styles/MovieCard.css';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


interface MovieCardProps {
  movie: Movie;
}


const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  }
  return (
    <Card className='movie-card'>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className='movie-card__image'
          component="img"
          alt={movie.name}
          image={movie.poster.url}
        />
        <CardContent className='movie-card__content'>
          <Typography gutterBottom variant="h5" component="div">
            {movie.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Рейтинг: {movie.rating.kp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MovieCard
