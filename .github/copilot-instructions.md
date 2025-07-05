# Copilot Instructions pour AviCiné

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Contexte du projet
AviCiné est une application web React moderne pour la découverte et la gestion de films. Elle utilise l'API TMDB (The Movie Database) pour récupérer les informations sur les films.

## Stack technique
- **Frontend** : React 18 avec Vite
- **Routing** : React Router (à installer)
- **API** : Axios pour les appels HTTP
- **Styling** : CSS modules ou CSS-in-JS
- **State Management** : Context API React

## Architecture du projet
```
src/
├── components/          # Composants réutilisables
│   ├── common/         # Composants génériques (Header, Footer, Button, etc.)
│   └── movie/          # Composants spécifiques aux films
├── pages/              # Pages principales de l'application
├── hooks/              # Hooks personnalisés
├── services/           # Services API et logique métier
├── context/            # Context API pour la gestion d'état
├── styles/             # Fichiers CSS globaux
└── utils/              # Fonctions utilitaires
```

## Bonnes pratiques à suivre
1. **Composants** : Créer des composants fonctionnels avec hooks
2. **Nommage** : PascalCase pour les composants, camelCase pour les fonctions
3. **Props** : Utiliser PropTypes ou TypeScript pour le typage
4. **API** : Centraliser les appels API dans le dossier services
5. **Responsive** : Mobile-first approach
6. **Performance** : Utiliser React.memo() et useMemo() quand nécessaire
7. **Accessibilité** : Ajouter les attributs aria et roles appropriés

## Fonctionnalités principales
- Recherche de films
- Affichage de la liste des films populaires
- Page de détails d'un film
- Système de favoris
- Filtres par genre, année, note
- Interface responsive

## API TMDB
- Base URL : https://api.themoviedb.org/3
- Nécessite une clé API (à configurer dans un fichier .env)
- Documentation : https://developers.themoviedb.org/3

## Conseils pour le développement
- Toujours tester les composants après création
- Utiliser des variables CSS pour les couleurs et espacements
- Implémenter la gestion d'erreur pour les appels API
- Ajouter des loading states pour une meilleure UX
