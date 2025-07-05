import React, { useState } from 'react';
import { useSearchMovies } from '../hooks/useMovies';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';

const Search = () => {
  const [query, setQuery] = useState('');
  const { movies, loading, error } = useSearchMovies(query);

  return (
    <div className="search">
      <div className="container">
        <h1>Rechercher des films</h1>
        
        <div className="search-form">
          <input
            type="text"
            placeholder="Tapez le nom d'un film..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {loading && <Loading message="Recherche en cours..." />}
        
        {error && (
          <ErrorMessage 
            error={error}
            title="Erreur lors de la recherche"
          />
        )}

        {movies.length > 0 && (
          <div className="movies-grid">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <h3>{movie.title}</h3>
                <p>{new Date(movie.release_date).getFullYear()}</p>
                <p>Note : {movie.vote_average}/10</p>
              </div>
            ))}
          </div>
        )}

        {query && !loading && movies.length === 0 && !error && (
          <p>Aucun film trouvé pour "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default Search;
