import React, { useState } from 'react';

function CatFactFetcher() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch cat fact. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Random Cat Fact</h1>
      <button onClick={fetchCatFact} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {loading ? 'Loading...' : 'Get Cat Fact'}
      </button>
      {fact && (
        <p style={{ marginTop: '20px', fontSize: '18px', maxWidth: '600px', margin: '20px auto' }}>
          {fact}
        </p>
      )}
    </div>
  );
}

export default CatFactFetcher;
