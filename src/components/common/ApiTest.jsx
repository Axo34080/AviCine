import React, { useState } from 'react';
import { movieService } from '../../services/movieService';

const ApiTest = () => {
  const [testResult, setTestResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const testApi = async () => {
    setIsLoading(true);
    setTestResult('');

    try {
      // Test simple avec les films populaires
      const data = await movieService.getPopularMovies(1);
      setTestResult(`✅ API fonctionne ! Récupéré ${data.results.length} films populaires`);
    } catch (error) {
      if (error.response?.status === 401) {
        setTestResult('❌ Clé API invalide ou manquante. Vérifiez votre fichier .env');
      } else {
        setTestResult(`❌ Erreur API: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      background: '#2f2f2f', 
      margin: '20px', 
      borderRadius: '8px',
      color: '#fff' 
    }}>
      <h3>🔧 Test de l'API TMDB</h3>
      
      <button 
        onClick={testApi}
        disabled={isLoading}
        style={{
          padding: '10px 20px',
          background: '#e50914',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          opacity: isLoading ? 0.6 : 1
        }}
      >
        {isLoading ? 'Test en cours...' : 'Tester l\'API'}
      </button>

      {testResult && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px', 
          background: '#1a1a1a', 
          borderRadius: '4px',
          fontFamily: 'monospace'
        }}>
          {testResult}
        </div>
      )}

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#b3b3b3' }}>
        <p><strong>Instructions :</strong></p>
        <ol>
          <li>Obtenez votre clé API sur <a href="https://www.themoviedb.org/settings/api" target="_blank" rel="noopener">TMDB</a></li>
          <li>Ajoutez-la dans le fichier <code>.env</code> : <code>VITE_TMDB_API_KEY=votre_cle</code></li>
          <li>Redémarrez le serveur de développement</li>
          <li>Cliquez sur "Tester l'API"</li>
        </ol>
      </div>
    </div>
  );
};

export default ApiTest;
