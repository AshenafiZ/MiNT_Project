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

      </div>
      {/* New section for divided windows */}
      <div className="gridContainer">
        <div className="window">
          <h2>General</h2>
          <p>This website is the planning and Monitoring website of Ministry of Innovation and Technology. The plans are divided into a general Goal which will include KPAs and KPIs of the specific sectors found in the Ministry. And the KPIs are recorded in percent or in number, allowing comparison of planned versus achieved values.</p>
        </div>
        <div className="window">
          <h2>Goals</h2>
          <p>Here the Goals of the Ministry will emerge once the minister has approved the plans. Currently, since no plan is approved, this section is empty.</p>
        </div>
        <div className="window">
          <h2>KPA</h2>
          <p>Ministry of Innovation and Technology works on its plan based on the Key Performance Area (KPA), which are the critical areas of an organization’s performance that are crucial for its success. KPAs refer to the general areas of outcomes within the business, while KPIs are used to measure the success of these areas.</p>
        </div>
        <div className="window">
          <h2>KPI</h2>
          <p>The KPIs are measurable values that demonstrate how effectively an organization is achieving its key business objectives. They are used to evaluate the success of an organization, employee, or project in meeting specific goals. In our institute, you will see the KPAs in number or percent.</p>
        </div>
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
            <a href="https://www.tiktok.com/@ethiopianministryofinnov?lang=en&is_from_webapp=1&sender_device=mobile&sender_web_id=7449108372555433478" target="_blank" rel="noopener noreferrer">
             <FaTiktok />
            </a>
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
