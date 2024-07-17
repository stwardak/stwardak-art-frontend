import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import stArt from '/src/assets/start.svg'; 

function Header() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="">
      <nav>
        <div className="flex items-center space-x-4">
          <img src={stArt} alt="ST Art." className="h-12 w-auto" />
        </div>
        <div className="relative flex items-center">
          <button
            onClick={toggleDarkMode}
            className={`w-16 h-8 ${isDarkMode ? 'bg-light' : 'bg-dark'} rounded-full relative flex items-center transition-colors duration-300`}
          >
            <span
              className={`w-8 h-8 ${isDarkMode ? 'bg-dark' : 'bg-light'} rounded-full absolute transition-transform duration-300 border-2 ${isDarkMode ? 'transform translate-x-8 border-light' : 'border-dark'}`}
            >
              <span className={`flex items-center justify-center w-full h-full text-xl ${isDarkMode ? 'text-light' : 'text-dark'}`}>
                {isDarkMode ? '☾' : '☀'}
              </span>
            </span>
          </button>
        </div>
        <ul>
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/collections" className="hover:underline">Collections</Link></li>
          <li><Link to="#" className="hover:underline">Shop</Link></li>
          <li><Link to="#" className="hover:underline">Blog</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
