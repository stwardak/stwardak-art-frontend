import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomCarousel from '../components/CustomCarousel';

function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/collections')
      .then(response => {
        const data = response.data;
        const shuffledData = data.sort(() => 0.5 - Math.random());
        console.log(shuffledData);
        setCollections(shuffledData);
      })
      .catch(error => {
        console.error('There was an error fetching the collections!', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className=" text-4xl text-center mb-4">Collections</h1>
      {collections.length > 0 ? (
        <CustomCarousel collections={collections} />
      ) : (
        <p>No collections found.</p>
      )}
    </div>
  );
};

export default Collections;
