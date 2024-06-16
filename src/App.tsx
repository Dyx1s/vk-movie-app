import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import FavoritesPage from './pages/FavoritesPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies' element={<MoviePage />}/>
        <Route path='/favorites' element={<FavoritesPage />}/>
      </Routes>
    </Router>
  )
}

export default App;
