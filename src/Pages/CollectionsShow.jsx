import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArtworkItem from '../components/ArtworkItem';
import { useParams } from 'react-router-dom';

const CollectionsShow = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/collections/${id}`)
      .then(response => {
        console.log("Collection data fetched:", response.data); // Debugging statement
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
        {/* {collection.artworks.map(artwork => (
          <ArtworkItem key={artwork.id} artwork={artwork} />
        ))} */}
        {collection.artworks && collection.artworks.length > 0 ? (
          collection.artworks.map(artwork => (
          <ArtworkItem key={artwork.id} artwork={artwork} />
        ))
        ) : (
        <p>No artworks found in this collection.</p>
        )}
      </ul>
    </div>
  );
};

export default CollectionsShow;
