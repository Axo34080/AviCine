import React from 'react';
import MovieCard from './MovieCard';
import './MovieGrid.css';

const MovieGrid = ({ movies, title, loading = false, error = null }) => {
  if (error) {
    return (
      <div className="movie-grid-error">
        <h2>Erreur de chargement</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="movie-grid-container">
        {title && <h2 className="movie-grid-title">{title}</h2>}
        <div className="movie-grid">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="movie-card-skeleton">
              <div className="movie-card-skeleton__poster"></div>
              <div className="movie-card-skeleton__content">
                <div className="movie-card-skeleton__title"></div>
                <div className="movie-card-skeleton__meta"></div>
                <div className="movie-card-skeleton__overview"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="movie-grid-empty">
        <div className="movie-grid-empty__icon">🎬</div>
        <h2>Aucun film trouvé</h2>
        <p>Essayez de modifier vos critères de recherche ou explorez d'autres catégories.</p>
      </div>
    );
  }

  return (
    <div className="movie-grid-container">
      {title && <h2 className="movie-grid-title">{title}</h2>}
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
