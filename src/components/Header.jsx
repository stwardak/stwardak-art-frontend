import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from './logo';

function Header() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="p-4 pb-24 flex justify-between items-center">
        <div className="flex items-center space-x-4 w-40 md:w-52">
          <Logo />
        </div>
        <div className="relative flex items-center space-x-4">
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
          <button className="md:hidden pl-3" onClick={toggleMenu}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke={isDarkMode ? '#f9f9f9' : '#231f20'}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
          <ul className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/collections" className="hover:underline">Collections</Link></li>
          <li><Link to="#" className="hover:underline">Shop</Link></li>
          <li><Link to="#" className="hover:underline">Blog</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;



