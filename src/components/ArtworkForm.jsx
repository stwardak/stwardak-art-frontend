import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArtworkForm({ artwork, setArtwork, onClose }) {
  const [collections, setCollections] = useState([]);
  const [formData, setFormData] = useState({
    title: artwork?.title || '',
    medium: artwork?.medium || '',
    description: artwork?.description || '',
    featured: artwork?.featured || false,
    image: null,
    collectionIds: artwork?.collections?.map(c => c.id) || []
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/collections.json`).then(response => {
      setCollections(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === 'checkbox' && name === 'featured') {
      setFormData({ ...formData, [name]: checked });
    } else if (type !== 'checkbox') {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleCollectionChange = (e) => {
    const collectionId = parseInt(e.target.value);
    const newCollectionIds = formData.collectionIds.includes(collectionId)
      ? formData.collectionIds.filter(id => id !== collectionId) // Remove ID
      : [...formData.collectionIds, collectionId]; // Add ID

    setFormData({ ...formData, collectionIds: newCollectionIds });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'collectionIds') {
        formData[key].forEach(id => data.append('artwork[collection_ids][]', id));
      } else {
        data.append(`artwork[${key}]`, formData[key]);
      }
    });

    if (formData.image) {
      data.append('artwork[image]', formData.image);
    }

    const url = artwork ? `http://localhost:3000/artworks/${artwork.id}.json` : `http://localhost:3000/artworks.json`;
    const method = artwork ? 'patch' : 'post';
    axios({ method, url, data, headers: { 'Content-Type': 'multipart/form-data' } })
      .then(response => {
        console.log(response.data);
        setArtwork(response.data); 
        onClose();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>{artwork ? 'Edit' : 'Upload New'} Artwork</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: <input name="title" type="text" value={formData.title} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Medium: <input name="medium" type="text" value={formData.medium} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Description: <textarea name="description" onChange={handleChange} value={formData.description}></textarea></label>
        </div>
        <div>
          <label>Featured: <input name="featured" type="checkbox" checked={formData.featured} onChange={handleChange} /></label>
        </div>
        <div>
          <label>Image: <input type="file" onChange={handleFileChange} /></label>
        </div>
        <div>
          <label>Collections:</label>
          {collections.map((collection) => (
            <div key={collection.id}>
              <input
                type="checkbox"
                name="collectionIds"
                value={collection.id}
                checked={formData.collectionIds.includes(collection.id)}
                onChange={handleCollectionChange}
              />
              {collection.name}
            </div>
          ))}
        </div>
        <div className="space-x-4">
          <button type="submit" className="bg-yellow px-4 rounded-full w-20 text-sm">Submit</button>
          <button type="button" className="bg-yellow px-4 rounded-full w-20 text-sm" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ArtworkForm;
