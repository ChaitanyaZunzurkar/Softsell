
import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <h1>Soft<span style={{color:"#1877F2"}}>Sell</span></h1>
        </div>
        
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} style={{color:"white"}}>
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#how-it-works" className="nav-link">How It Works</a>
          </li>
          <li className="nav-item">
            <a href="#why-choose-us" className="nav-link">Why Choose Us</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" className="nav-link">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
