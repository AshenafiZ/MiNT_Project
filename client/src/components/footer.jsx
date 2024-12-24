import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTelegram, FaTiktok, FaYoutube } from 'react-icons/fa';
import '../style/components/footer.css';

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
            <a href="https://www.facebook.com/MInT.Ethiopia?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
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
            <a href="https://youtube.com/@ministryofinnovationandtechnol?si=a2LF4SSTdlIQWEUH" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@ethiopianministryofinnov?lang=en&is_from_webapp=1&sender_device=mobile&sender_web_id=7449108372555433478" target="_blank" rel="noopener noreferrer">
             <FaTiktok />
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
