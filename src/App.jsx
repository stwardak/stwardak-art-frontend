import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Collections from './Pages/Collections';
import CollectionsShow from './Pages/CollectionsShow';
import { Modal } from './components/Modal';
import { ArtworksShow } from './components/ArtworksShow';
import Contact from './Pages/Contact';

function App() {

  const [isArtworksShowVisible, setIsArtworksShowVisible] = useState(false);
  const [currentArtwork, setCurrentArtwork] = useState({});

  const handleShowArtwork = (artwork) => {
    console.log("handleShowArtwork", artwork);
    setIsArtworksShowVisible(true);
    setCurrentArtwork(artwork);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsArtworksShowVisible(false);
  };
    
  
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home onShowArtwork={handleShowArtwork} />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:id" element={<CollectionsShow onShowArtwork={handleShowArtwork} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Modal show={isArtworksShowVisible} onClose={handleClose}>
          <ArtworksShow artwork={currentArtwork} />
        </Modal>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
