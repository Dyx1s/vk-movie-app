import React from 'react'
import { Grid, Button } from '@mui/material'
import { Movie } from '../types'
import MovieCard from './MovieCard'
import '../styles/MovieList.css'

interface MovieListProps {
  movies: Movie[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
const MovieList: React.FC<MovieListProps> = ({ movies, setPage }) => {
  return (
    <div>
      <Grid container spacing={3}>
        {movies.map(movie => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            setPage(prev => prev + 1)
          }}
        >
          Load more
        </Button>
      </div>
    </div>
  )
}

export default MovieList
