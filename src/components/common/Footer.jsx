import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__title">🎬 AviCiné</h3>
          <p className="footer__description">
            Votre application de découverte de films alimentée par TMDB. 
            Explorez, recherchez et gérez vos films préférés en toute simplicité.
          </p>
          <div className="footer__stats">
            <div className="footer__stat">
              <span className="footer__stat-number">1M+</span>
              <span className="footer__stat-label">Films</span>
            </div>
            <div className="footer__stat">
              <span className="footer__stat-number">500K+</span>
              <span className="footer__stat-label">Artistes</span>
            </div>
          </div>
        </div>
        
        <div className="footer__section">
          <h4 className="footer__subtitle">Liens utiles</h4>
          <ul className="footer__links">
            <li><a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">🎭 TMDB</a></li>
            <li><a href="https://github.com/Axo34080" target="_blank" rel="noopener noreferrer">💻 GitHub</a></li>
            <li><a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">🎯 IMDb</a></li>
            <li><a href="https://www.allocine.fr/" target="_blank" rel="noopener noreferrer">🍿 AlloCiné</a></li>
          </ul>
        </div>
        
        <div className="footer__section">
          <h4 className="footer__subtitle">Développé par</h4>
          <div className="footer__author-card">
            <div className="footer__author-avatar">👨‍💻</div>
            <div className="footer__author-info">
              <p className="footer__author">Marc Villain</p>
              <p className="footer__course">MyDigitalSchool - Bachelor 3 Dev Web</p>
              <p className="footer__year">Promotion 2025</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <p className="footer__copyright">
            © 2025 AviCiné - Données fournies par TMDB
          </p>
          <div className="footer__badges">
            <span className="footer__badge">⚡ Fait avec React</span>
            <span className="footer__badge">🚀 Vite</span>
            <span className="footer__badge">🎨 Design moderne</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
