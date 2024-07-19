import React from 'react';

const ArtworkItem = ({ artwork, onShowArtwork }) => {
  return (
    <div className="cursor-pointer" onClick={() => onShowArtwork(artwork)}>
      {artwork.image_url && <img src={`http://localhost:3000${artwork.image_url}`} alt={artwork.title} style={{ maxWidth: '100%' }} />}
      <br/>
    </div>
  );
};

export default ArtworkItem;
