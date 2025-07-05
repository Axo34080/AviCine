import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Actions pour le reducer
const ACTIONS = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  LOAD_FAVORITES: 'LOAD_FAVORITES'
};

// Reducer pour gérer les favoris
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case ACTIONS.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(movie => movie.id !== action.payload)
      };
    case ACTIONS.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };
    default:
      return state;
  }
};

// État initial
const initialState = {
  favorites: []
};

// Création du contexte
const FavoritesContext = createContext();

// Provider du contexte
export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  // Charger les favoris depuis localStorage au démarrage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('avicine-favorites');
    if (savedFavorites) {
      try {
        const favorites = JSON.parse(savedFavorites);
        dispatch({ type: ACTIONS.LOAD_FAVORITES, payload: favorites });
      } catch (error) {
        console.error('Erreur lors du chargement des favoris:', error);
      }
    }
  }, []);

  // Sauvegarder les favoris dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('avicine-favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  // Ajouter un film aux favoris
  const addFavorite = (movie) => {
    const isAlreadyFavorite = state.favorites.some(fav => fav.id === movie.id);
    if (!isAlreadyFavorite) {
      dispatch({ type: ACTIONS.ADD_FAVORITE, payload: movie });
    }
  };

  // Supprimer un film des favoris
  const removeFavorite = (movieId) => {
    dispatch({ type: ACTIONS.REMOVE_FAVORITE, payload: movieId });
  };

  // Vérifier si un film est dans les favoris
  const isFavorite = (movieId) => {
    return state.favorites.some(movie => movie.id === movieId);
  };

  // Basculer l'état favori d'un film
  const toggleFavorite = (movie) => {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  const value = {
    favorites: state.favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites doit être utilisé dans un FavoritesProvider');
  }
  return context;
};

export default FavoritesContext;
