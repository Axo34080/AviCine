import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetails } from '../hooks/useMovies';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetails(id);

  if (loading) {
    return <Loading message="Chargement des détails du film..." />;
  }

  if (error) {
    return (
      <ErrorMessage 
        error={error}
        title="Erreur lors du chargement du film"
        onRetry={() => window.location.reload()}
      />
    );
  }

  if (!movie) {
    return <ErrorMessage title="Film non trouvé" />;
  }

  return (
    <div className="movie-details">
      <div className="container">
        <h1>{movie.title}</h1>
        <p>Année : {new Date(movie.release_date).getFullYear()}</p>
        <p>Note : {movie.vote_average}/10</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
