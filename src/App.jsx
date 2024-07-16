import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Collections from './Pages/Collections';
import CollectionsShow from './Pages/CollectionsShow';

function App() {
  
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:id" element={<CollectionsShow />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
