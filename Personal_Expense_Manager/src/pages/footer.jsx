import React from 'react';
import './CSS/Footer.css'; // Link to your CSS file for styling
import { Link } from 'react-router-dom';
// Import the images
import emailIcon from './Footer_Images/email.png';
import phoneIcon from './Footer_Images/phone.webp';
import instaIcon from './Footer_Images/insta.webp';
import linkedinIcon from './Footer_Images/linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
          "CashFlow is your ultimate platform to efficiently manage your finances. Whether you're a business or an individual, CashFlow helps you track income, expenses, and optimize cash management. Stay on top of your financial health and make informed decisions with ease!"
          </p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/addmobile">Servies</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <div className="contact-info">
            <img src={emailIcon} alt="Email Icon" />
            <p>Email: Chetankolhe@gmail.com</p>
          </div>
          
           
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 CashFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
