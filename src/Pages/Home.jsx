import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtworkItem from '../components/ArtworkItem';
import Collections from './Collections';

function Home({ onShowArtwork }) {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/artworks')
      .then(response => {
        setArtworks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the artworks!', error);
      });
  }, []);

  return (
    <div>
      <main>
        <div>
          <h1>Artworks</h1>
          <ul>
            {artworks.map(artwork => (
              <ArtworkItem key={artwork.id} artwork={artwork} onShowArtwork={onShowArtwork}/>
            ))}
          </ul>
          <Collections />
        </div>
      </main>
    </div>
  );
}

export default Home;
