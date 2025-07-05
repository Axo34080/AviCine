import React from 'react';
import { usePopularMovies } from '../hooks/useMovies';
import MovieGrid from '../components/movie/MovieGrid';
import './Home.css';

const Home = () => {
  const { movies, loading, error } = usePopularMovies();

  return (
    <div className="home">
      <div className="container">
        <section className="hero">
          <h1 className="hero__title">
            🎬 Bienvenue sur <span className="hero__title--accent">AviCiné</span>
          </h1>
          <p className="hero__subtitle">
            Découvrez les derniers films populaires et gérez vos favoris
          </p>
        </section>

        <section className="movies-section">
          <MovieGrid 
            movies={movies} 
            title="Films populaires"
            loading={loading}
            error={error}
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
