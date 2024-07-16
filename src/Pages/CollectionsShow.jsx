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
        setCollection(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the collection!', error);
      });
  }, [id]);

  if (!collection) return <p>Loading...</p>;

  return (
    <div>
      <h1>{collection.name}</h1>
      <p>{collection.description}</p>
      <ul>
        {collection.artworks && collection.artworks.length > 0 ? (
          collection.artworks.map(artwork => (
            <ArtworkItem key={artwork.id} artwork={artwork} onShowArtwork={onShowArtwork} />
          ))
        ) : (
          <p>No artworks found in this collection.</p>
        )}
      </ul>
    </div>
  );
};

export default CollectionsShow;
