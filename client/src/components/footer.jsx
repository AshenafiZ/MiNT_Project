import React from 'react';
import '../style/components/footer.css';
import { FaFacebook, FaTelegram, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-logo">
          <h3>Ministry of Innovation and Technology</h3>
          <p>Driving innovation and technology for a better future.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Ministry of Innovation and Technology. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
