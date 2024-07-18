import React from 'react';

const ArtworkItem = ({ artwork, onShowArtwork }) => {
  
  return (
    <div className="cursor-pointer" onClick={() => onShowArtwork(artwork)}>
      {/* <h2>{artwork.title}</h2> */}
      {/* <p>Medium: {artwork.medium}</p> */}
      {/* <p>{artwork.description}</p> */}
      {artwork.image_url && <img src={`http://localhost:3000${artwork.image_url}`} alt={artwork.title} style={{ maxWidth: '100%' }} />}
      <br/>
    </div>
  );
};

export default ArtworkItem;


