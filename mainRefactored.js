import React, { useState, useEffect } from 'react';
import Movie from './movies'; // Step 3 - Rename '<nexttech-movie' to match the name of your new React Component in 'movies.js'

function App() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('./movies.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data.');
        }
        const json = await response.json();
        setData(json);
        setLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="col-sm">
          {loaded && data && data.movies.map((movie) => (
            <Movie
              key={movie.id}
              data={movie}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
