import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  
  if (!movie) return null;
  
  const isFavorite = favorites.some(fav => fav.id === movie.id);
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder-movie.svg';
  
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
  
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };
  
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-card__link">
        <div className="movie-card__poster">
          <img 
            src={posterUrl} 
            alt={movie.title}
            className="movie-card__image"
            loading="lazy"
          />
          <div className="movie-card__overlay">
            <div className="movie-card__rating">
              <span className="movie-card__rating-icon">⭐</span>
              <span className="movie-card__rating-value">{rating}</span>
            </div>
            <button 
              className={`movie-card__favorite ${isFavorite ? 'movie-card__favorite--active' : ''}`}
              onClick={handleFavoriteClick}
              aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            >
              {isFavorite ? '❤️' : '🤍'}
            </button>
          </div>
          <div className="movie-card__gradient"></div>
        </div>
        
        <div className="movie-card__content">
          <h3 className="movie-card__title">{movie.title}</h3>
          <div className="movie-card__meta">
            <span className="movie-card__year">{releaseYear}</span>
            {movie.genre_ids && movie.genre_ids.length > 0 && (
              <span className="movie-card__genre">
                {movie.genre_ids.slice(0, 2).map(id => getGenreName(id)).join(', ')}
              </span>
            )}
          </div>
          {movie.overview && (
            <p className="movie-card__overview">
              {movie.overview.length > 100 
                ? `${movie.overview.substring(0, 100)}...` 
                : movie.overview
              }
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

// Helper function pour obtenir le nom du genre (à améliorer plus tard avec l'API)
const getGenreName = (id) => {
  const genres = {
    28: 'Action', 12: 'Aventure', 16: 'Animation', 35: 'Comédie',
    80: 'Crime', 99: 'Documentaire', 18: 'Drame', 10751: 'Familial',
    14: 'Fantastique', 36: 'Histoire', 27: 'Horreur', 10402: 'Musique',
    9648: 'Mystère', 10749: 'Romance', 878: 'Science-Fiction',
    10770: 'Téléfilm', 53: 'Thriller', 10752: 'Guerre', 37: 'Western'
  };
  return genres[id] || 'Autre';
};

export default MovieCard;
