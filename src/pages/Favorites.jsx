import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites">
      <div className="container">
        <h1>Mes Favoris</h1>
        {favorites.length === 0 ? (
          <p>Aucun film dans vos favoris</p>
        ) : (
          <div className="movies-grid">
            {favorites.map((movie) => (
              <div key={movie.id} className="movie-card">
                <h3>{movie.title}</h3>
                <p>{new Date(movie.release_date).getFullYear()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
