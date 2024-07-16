import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <h2>Collections</h2>
      <ul>
        {collections.map(collection => (
          <li key={collection.id}>
            <Link to={`/collections/${collection.id}`}>{collection.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collections;
