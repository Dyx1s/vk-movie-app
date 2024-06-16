import React, { useState } from 'react'

import '../styles/Filter.css'
import { Box, Button, MenuItem, TextField } from '@mui/material';


interface FilterProps {
  onFilter: (genre?: string, rating?: number, year?: number) => void;
}

const genres = ['Экшн', 'Комедия', 'Драма', 'Ужасы', 'Романтик'];



const Filter: React.FC<FilterProps> = ({onFilter}) => {
  const [genre, setGenre] = useState<string>();
  const [rating, setRating] = useState<number>();
  const [year, setYear] = useState<number>();

  const handleFilter = () => {
    onFilter(genre, rating, year);
  }
  return (
    <Box className='filter-container'>
      <TextField
        select
        label="Жанр"
        value={genre || ''}
        onChange={(event) => setGenre(event.target.value)}
        sx={{width: 200}}
        className='filter-item'
      >

        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
        
      

      </TextField>

    </Box>
  )
}

export default Filter
