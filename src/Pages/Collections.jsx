import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/collections')
      .then(response => {
        setCollections(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the collections!', error);
      });
  }, []);

  return (
    <div>
      <h1>Collections</h1>
      <ul>
        {collections.map(collection => (
          <li key={collection.id}>{collection.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Collections;
