import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY || '1834768aa99b06ffe9c8ad8eb58a8c60';
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL || 'https://image.tmdb.org/t/p/w500';

// Instance Axios configurée pour TMDB
const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'fr-FR'
  }
});

// Service pour les appels API TMDB
export const movieService = {
  // Récupérer les films populaires
  getPopularMovies: async (page = 1) => {
    try {
      const response = await tmdbApi.get('/movie/popular', {
        params: { page }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des films populaires:', error);
      
      if (error.response?.status === 401) {
        throw new Error('Clé API TMDB invalide ou manquante. Vérifiez votre configuration.');
      } else if (error.response?.status === 404) {
        throw new Error('Endpoint API non trouvé. Vérifiez l\'URL de base.');
      } else if (error.response) {
        throw new Error(`Erreur API TMDB: ${error.response.status} - ${error.response.data?.status_message || error.message}`);
      } else {
        throw new Error(`Erreur réseau: ${error.message}`);
      }
    }
  },

  // Rechercher des films
  searchMovies: async (query, page = 1) => {
    try {
      const response = await tmdbApi.get('/search/movie', {
        params: { query, page }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      throw error;
    }
  },

  // Récupérer les détails d'un film
  getMovieDetails: async (movieId) => {
    try {
      const response = await tmdbApi.get(`/movie/${movieId}`, {
        params: {
          append_to_response: 'credits,videos,similar'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des détails:', error);
      throw error;
    }
  },

  // Récupérer les genres de films
  getGenres: async () => {
    try {
      const response = await tmdbApi.get('/genre/movie/list');
      return response.data.genres;
    } catch (error) {
      console.error('Erreur lors de la récupération des genres:', error);
      throw error;
    }
  },

  // Récupérer les films par genre
  getMoviesByGenre: async (genreId, page = 1) => {
    try {
      const response = await tmdbApi.get('/discover/movie', {
        params: { with_genres: genreId, page }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des films par genre:', error);
      throw error;
    }
  }
};

// Fonction utilitaire pour construire les URLs d'images
export const getImageUrl = (path, size = 'w500') => {
  if (!path) return null;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export default movieService;
