// Utilitaires pour formater les données

// Formater une date en français
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Formater une durée en minutes vers heures:minutes
export const formatRuntime = (minutes) => {
  if (!minutes) return '';
  
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours === 0) {
    return `${mins} min`;
  }
  
  return `${hours}h ${mins}min`;
};

// Formater un nombre avec des espaces (ex: 1000000 -> 1 000 000)
export const formatNumber = (number) => {
  if (!number) return '0';
  
  return number.toLocaleString('fr-FR');
};

// Formater une note sur 10 (TMDB donne sur 10)
export const formatRating = (rating) => {
  if (!rating) return '0';
  
  return rating.toFixed(1);
};

// Générer une couleur basée sur la note
export const getRatingColor = (rating) => {
  if (rating >= 8) return '#22c55e'; // Vert
  if (rating >= 6) return '#eab308'; // Jaune
  if (rating >= 4) return '#f97316'; // Orange
  return '#ef4444'; // Rouge
};

// Tronquer un texte à une longueur donnée
export const truncateText = (text, maxLength = 150) => {
  if (!text) return '';
  
  if (text.length <= maxLength) return text;
  
  return text.substring(0, maxLength).trim() + '...';
};

// Générer un slug à partir d'un titre
export const generateSlug = (title) => {
  if (!title) return '';
  
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
    .replace(/[^a-z0-9\s-]/g, '') // Supprimer les caractères spéciaux
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .replace(/-+/g, '-') // Éviter les tirets multiples
    .trim('-');
};

// Valider une clé API TMDB
export const validateApiKey = (apiKey) => {
  if (!apiKey) return false;
  
  // Les clés API TMDB font généralement 32 caractères
  const apiKeyRegex = /^[a-f0-9]{32}$/i;
  return apiKeyRegex.test(apiKey);
};

// Obtenir l'année à partir d'une date
export const getYear = (dateString) => {
  if (!dateString) return '';
  
  return new Date(dateString).getFullYear();
};

// Créer une URL de partage pour un film
export const createShareUrl = (movieId, title) => {
  const baseUrl = window.location.origin;
  const slug = generateSlug(title);
  return `${baseUrl}/movie/${movieId}/${slug}`;
};

// Vérifier si l'utilisateur est sur mobile
export const isMobile = () => {
  return window.innerWidth <= 768;
};

// Créer un debounce pour les fonctions
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Générer des classes CSS conditionnelles
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
