// 🔧 Configuration temporaire avec clé API en dur pour test
const API_KEY = '1834768aa99b06ffe9c8ad8eb58a8c60';
const BASE_URL = 'https://api.themoviedb.org/3';

// Test simple
export const testDirectApi = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR`);
    const data = await response.json();
    console.log('✅ Test direct API réussi:', data.results?.length || 0, 'films');
    return data;
  } catch (error) {
    console.error('❌ Test direct API échoué:', error);
    throw error;
  }
};

// Utilisation dans un composant React
export const DirectApiTest = () => {
  const handleTest = async () => {
    try {
      const data = await testDirectApi();
      alert(`✅ API fonctionne ! ${data.results?.length || 0} films récupérés`);
    } catch (error) {
      alert(`❌ Erreur: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '20px', background: '#2f2f2f', margin: '20px 0', borderRadius: '8px' }}>
      <h3 style={{ color: '#fff' }}>🔧 Test API Direct (sans .env)</h3>
      <button 
        onClick={handleTest}
        style={{
          padding: '10px 20px',
          background: '#22c55e',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Tester API Direct
      </button>
    </div>
  );
};
