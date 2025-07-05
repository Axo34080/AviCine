import React, { useEffect, useState } from 'react';

const ApiDebugger = () => {
  const [apiInfo, setApiInfo] = useState({});

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;
    
    setApiInfo({
      apiKey: apiKey || 'Non définie',
      apiKeyLength: apiKey?.length || 0,
      baseUrl: baseUrl || 'Non définie',
      hasApiKey: !!apiKey,
      isValidLength: apiKey?.length === 32
    });
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      background: '#1a1a1a', 
      margin: '20px 0', 
      borderRadius: '8px',
      fontFamily: 'monospace',
      fontSize: '14px'
    }}>
      <h4 style={{ color: '#e50914', marginBottom: '15px' }}>🔍 Debug API Configuration</h4>
      
      <div style={{ color: '#fff' }}>
        <p><strong>Clé API:</strong> {apiInfo.hasApiKey ? '✅ Présente' : '❌ Manquante'}</p>
        <p><strong>Longueur:</strong> {apiInfo.apiKeyLength} caractères {apiInfo.isValidLength ? '✅' : '❌'}</p>
        <p><strong>URL de base:</strong> {apiInfo.baseUrl}</p>
        <p><strong>Clé (masquée):</strong> {apiInfo.apiKey ? `${apiInfo.apiKey.substring(0, 8)}...` : 'Non définie'}</p>
      </div>
      
      {!apiInfo.hasApiKey && (
        <div style={{ color: '#ef4444', marginTop: '10px' }}>
          ⚠️ Clé API manquante dans les variables d'environnement
        </div>
      )}
      
      {apiInfo.hasApiKey && !apiInfo.isValidLength && (
        <div style={{ color: '#f59e0b', marginTop: '10px' }}>
          ⚠️ La clé API devrait faire 32 caractères
        </div>
      )}
    </div>
  );
};

export default ApiDebugger;
