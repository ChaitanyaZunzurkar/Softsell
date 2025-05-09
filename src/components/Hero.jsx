
import React from 'react';
import '../styles/Hero.css';
import heroimg from '../assets/Screenshot_2025-05-09_180415-removebg-preview.png'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Turn Unused Software Licenses Into Cash
          </h1>
          <p className="hero-subtitle">
            SoftSell helps businesses maximize the value of their unused software licenses with our secure, transparent, and efficient resale marketplace.
          </p>
          <div className="hero-buttons">
          <a
            href="#contact"
            className="btn hover-primary btn-lg"
            style={{
              backgroundColor: '#1877f2',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600',
              marginRight: '1rem'
            }}
          >
            Sell Your Licenses
          </a>

          <a
            href="#how-it-works"
            className="btn hover-secondary btn-lg"
            style={{
              backgroundColor: '#e2e8f0',
              color: '#1e3a8a',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Learn More
          </a>

          </div>
        </div>
        <div className="hero-image">
          <img src={heroimg} alt="Software License Management" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
