import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArtworkItem from '../components/ArtworkItem';
import { useParams } from 'react-router-dom';

const CollectionsShow = ({ onShowArtwork }) => {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/collections/${id}`)
      .then(response => {
        const shuffledArtworks = response.data.artworks.sort(() => Math.random() - 0.5);
        setCollection({ ...response.data, artworks: shuffledArtworks });
      })
      .catch(error => {
        console.error('There was an error fetching the collection!', error);
      });
  }, [id]);

  if (!collection) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">{collection.name}</h1>
      <p className="text-center mb-8">{collection.description}</p>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {collection.artworks && collection.artworks.length > 0 ? (
          collection.artworks.map(artwork => (
            <div key={artwork.id} className="break-inside-avoid">
              <ArtworkItem artwork={artwork} onShowArtwork={onShowArtwork} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">No artworks found in this collection.</p>
        )}
      </div>
    </div>
  );
};

export default CollectionsShow;
