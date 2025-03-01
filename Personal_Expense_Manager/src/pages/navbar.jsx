import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and Close Icons

import './CSS/navbar.css';

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser') || '');
  const [emailuser, setemailUser] = useState(localStorage.getItem('email') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling mobile menu
  const navigate = useNavigate();

  useEffect(() => {
    const updateAuthStatus = () => {
      setLoggedInUser(localStorage.getItem('loggedInUser') || '');
      setemailUser(localStorage.getItem('email') || '');
      setIsAuthenticated(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', updateAuthStatus);
    return () => {
      window.removeEventListener('storage', updateAuthStatus);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem('token');
      localStorage.removeItem('loggedInUser');
      window.dispatchEvent(new Event('storage'));
      alert('User Logged Out Successfully');
      navigate('/login');
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navbar">
      <div className="logo">
        <h4>CashFlow</h4>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links */}
      <div id="links" className={isMenuOpen ? "open" : ""}>
        <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
        <a onClick={() => scrollToSection('services')} className="nav-link">Services</a>
        <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
        <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>

        {isAuthenticated ? (
          <div className="nav-links" id='ok'>
            <FaUserCircle className="user-icon" onClick={toggleDropdown} />
            <h2 id="loggedinusername">{loggedInUser}</h2>
            
              <div className="dropdown-menu">
                <button onClick={handleLogout} id="logoutBtn">Logout</button>
              </div>
            
          </div>
        ) : (
          <div className="nav-links" id="loginBtn">
            <Link to="/login" className="nav-link">Login</Link>
          </div>
        )}
      </div>

      
    </div>
  );
}

export default Navbar;
