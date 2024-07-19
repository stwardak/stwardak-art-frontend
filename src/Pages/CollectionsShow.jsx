import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArtworkItem from '../components/ArtworkItem';
import { useParams } from 'react-router-dom';
import { Modal } from '../components/Modal';

const CollectionsShow = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);
  const [currentArtwork, setCurrentArtwork] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

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

  const handleShowArtwork = (artwork) => {
    setCurrentArtwork(artwork);
    setEditMode(false);
    setShowModal(true);
  };

  const handleEditArtwork = (artwork) => {
    setCurrentArtwork(artwork);
    setEditMode(true);
    setShowModal(true);
  };

  const handleDeleteArtwork = (artworkId) => {
    axios.delete(`http://localhost:3000/artworks/${artworkId}.json`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` }
    }).then(() => {
      setCollection({
        ...collection,
        artworks: collection.artworks.filter(artwork => artwork.id !== artworkId)
      });
      setShowModal(false);
    }).catch(error => console.error('Failed to delete artwork:', error));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditMode(false);
    setCurrentArtwork(null);
  };

  const handleSaveArtwork = (updatedArtwork) => {
    if (editMode) {
      setCollection({
        ...collection,
        artworks: collection.artworks.map(artwork => artwork.id === updatedArtwork.id ? updatedArtwork : artwork)
      });
    } else {
      setCollection({
        ...collection,
        artworks: [...collection.artworks, updatedArtwork]
      });
    }
    handleCloseModal();
  };

  if (!collection) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">{collection.name}</h1>
      <p className="text-center mb-8">{collection.description}</p>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {collection.artworks && collection.artworks.length > 0 ? (
          collection.artworks.map(artwork => (
            <div key={artwork.id} className="break-inside-avoid">
              <ArtworkItem artwork={artwork} onShowArtwork={handleShowArtwork} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">No artworks found in this collection.</p>
        )}
      </div>
      <Modal
        show={showModal}
        editMode={editMode}
        currentArtwork={currentArtwork}
        onClose={handleCloseModal}
        setArtwork={handleSaveArtwork}
        onEdit={handleEditArtwork}
        onDelete={handleDeleteArtwork}
      />
    </div>
  );
};

export default CollectionsShow;
