import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'


const Navbar: React.FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Let's movie!</Link>
        </Typography>
        <Box>
          <Button color="inherit" component={ Link } to='/movies/:id'>Movies</Button>
          <Button color="inherit" component={ Link } to='/favorites'>Favorites</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
