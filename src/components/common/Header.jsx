import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            🎬 AviCiné
          </Link>
          
          <nav className="header__nav">
            <Link 
              to="/" 
              className={`header__nav-link ${isActive('/') ? 'header__nav-link--active' : ''}`}
            >
              Accueil
            </Link>
            <Link 
              to="/search" 
              className={`header__nav-link ${isActive('/search') ? 'header__nav-link--active' : ''}`}
            >
              Rechercher
            </Link>
            <Link 
              to="/favorites" 
              className={`header__nav-link ${isActive('/favorites') ? 'header__nav-link--active' : ''}`}
            >
              Favoris
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
