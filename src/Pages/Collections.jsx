import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '/src/components/styles.css';

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
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Collections</h2>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} className="mb-8">
        {collections.map(collection => (
          <div key={collection.id} className="p-4">
            <Link to={`/collections/${collection.id}`}>
              <div className="relative">
                <img src={collection.image_url || 'placeholder.jpg'} alt={collection.name} className="w-full h-64 object-cover rounded-md shadow-lg"/>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{collection.name}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Collections;

