import React from 'react'
import { Movie } from '../types';
import '../styles/MovieCard.css';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardMedia } from '@mui/material';


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
      <CardActionArea>
        <CardMedia
          component="img"
          alt={movie.name}
          image={movie.posterUrl}
        />
      </CardActionArea>
    </Card>
  )
}

export default MovieCard
