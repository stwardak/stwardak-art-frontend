import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtworkItem from '../components/ArtworkItem';
import Collections from './Collections';
import { Modal } from '../components/Modal';
import artBanner from '/src/assets/ArtBanner.jpg'; 

function Home() {
  const [artworks, setArtworks] = useState([]);
  const [currentArtwork, setCurrentArtwork] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/artworks')
      .then(response => {
        setArtworks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the artworks!', error);
      });
  }, []);

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
      setArtworks(artworks.filter(artwork => artwork.id !== artworkId));
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
      setArtworks(artworks.map(artwork => artwork.id === updatedArtwork.id ? updatedArtwork : artwork));
    } else {
      setArtworks([...artworks, updatedArtwork]);
    }
    handleCloseModal();
  };

  return (
    <div>
      <main>
        <div className="flex justify-center items-center">
          <img src={artBanner} alt="ST Art." className="w-full md:w-1/2"/>
        </div>
        <div className="py-40">
          <Collections />
        </div>
        <div>
          <h1>Artworks</h1>
          <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {artworks.map(artwork => (
              <ArtworkItem key={artwork.id} artwork={artwork} onShowArtwork={handleShowArtwork} />
            ))}
          </ul>
        </div>
      </main>
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
}

export default Home;
