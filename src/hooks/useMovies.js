import { useState, useEffect } from 'react';
import { movieService } from '../services/movieService';

// Hook personnalisé pour récupérer les films populaires
export const usePopularMovies = (page = 1) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await movieService.getPopularMovies(page);
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, [page]);

  return { movies, loading, error };
};

// Hook personnalisé pour la recherche de films
export const useSearchMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    const searchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await movieService.searchMovies(query);
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Débounce la recherche
    const timeoutId = setTimeout(searchMovies, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return { movies, loading, error };
};

// Hook personnalisé pour récupérer les détails d'un film
export const useMovieDetails = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await movieService.getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return { movie, loading, error };
};

// Hook personnalisé pour récupérer les genres
export const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await movieService.getGenres();
        setGenres(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return { genres, loading, error };
};

// Hook personnalisé pour récupérer les films par genre
export const useMoviesByGenre = (genreId, page = 1) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!genreId) return;

    const fetchMoviesByGenre = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await movieService.getMoviesByGenre(genreId, page);
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByGenre();
  }, [genreId, page]);

  return { movies, loading, error };
};
