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
        id='outlined-select-genre'
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

      <TextField
        label="Рейтинг"
        type="number"
        value={rating || ''}
        onChange={(event) => setRating(Number(event.target.value))}
        sx={{width: 200}}
        className='filter-item'
      />

      <TextField
        label="Год"
        type='number'
        value={year || ''}
        onChange={e => setYear(parseInt(e.target.value, 10))}
        sx={{width: 200}}
        className='filter-item'
      />

      <Button 
        className='filter-btn' 
        variant="contained" 
        color='primary' 
        sx={{width: 200}} 
        onClick={handleFilter}
      >
        Отфильтровать
      </Button>

    </Box>
  )
}

export default Filter
