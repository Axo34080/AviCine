# 🎬 AviCiné

Application web moderne pour la découverte et la gestion de films, développée avec React et Vite.

## 🚀 Fonctionnalités

- 🔍 Recherche de films
- 📋 Liste des films populaires
- 🎭 Page de détails des films
- ⭐ Système de favoris
- 🎯 Filtres par genre, année, note
- 📱 Interface responsive

## 🛠️ Technologies

- **Frontend** : React 18 avec Vite
- **Routing** : React Router
- **API** : Axios + TMDB API
- **Styling** : CSS modules
- **State Management** : Context API

## 📦 Installation

1. Cloner le repository
```bash
git clone https://github.com/votre-username/avicine.git
cd avicine
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer l'API TMDB
- Créer un compte sur [TMDB](https://www.themoviedb.org/)
- Obtenir votre clé API
- Copier `.env.example` vers `.env`
- Remplir votre clé API dans `.env`

4. Démarrer le serveur de développement
```bash
npm run dev
```

## 🏗️ Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── common/         # Composants génériques
│   └── movie/          # Composants spécifiques aux films
├── pages/              # Pages principales
├── hooks/              # Hooks personnalisés
├── services/           # Services API
├── context/            # Context API
├── styles/             # Fichiers CSS globaux
└── utils/              # Fonctions utilitaires
```

## 🎯 Scripts disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Construire pour la production
- `npm run preview` - Prévisualiser la build de production
- `npm run lint` - Linter le code

## 📚 API TMDB

Ce projet utilise l'API TMDB pour récupérer les informations sur les films.
- [Documentation officielle](https://developers.themoviedb.org/3)
- [Créer un compte](https://www.themoviedb.org/signup)

## 👨‍💻 Développeur

Marc Villain - Étudiant en développement web full-stack JavaScript+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
