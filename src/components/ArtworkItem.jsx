import React from 'react';

const ArtworkItem = ({ artwork, onShowArtwork }) => {
  
  return (
    <li>
      <h2>{artwork.title}</h2>
      <p>Medium: {artwork.medium}</p>
      <p>{artwork.description}</p>
      {artwork.image_url && <img src={`http://localhost:3000${artwork.image_url}`} alt={artwork.title} style={{ maxWidth: '20%' }} />}
      <br/>
      <button onClick={() => onShowArtwork(artwork)}>More info</button>
    </li>
  );
};

export default ArtworkItem;


