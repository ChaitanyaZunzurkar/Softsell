
import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <a href="#" className="footer-logo">SoftSell</a>
            <p className="footer-about">
              SoftSell is the leading marketplace for businesses to securely sell and buy pre-owned software licenses, helping organizations maximize their IT investments.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#">About Us</a></li>
              <li className="footer-link"><a href="#">Our Team</a></li>
              <li className="footer-link"><a href="#">Careers</a></li>
              <li className="footer-link"><a href="#">Press</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#">Blog</a></li>
              <li className="footer-link"><a href="#">Knowledge Base</a></li>
              <li className="footer-link"><a href="#">Case Studies</a></li>
              <li className="footer-link"><a href="#">FAQs</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#">Privacy Policy</a></li>
              <li className="footer-link"><a href="#">Terms of Service</a></li>
              <li className="footer-link"><a href="#">Cookie Policy</a></li>
              <li className="footer-link"><a href="#">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
