import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import './styles/globals.css';
import './App.css';

// Import des composants (à créer)
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
