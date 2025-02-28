import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Import user icon

import './CSS/navbar.css';

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser') || '');
  const [emailuser, setemailUser] = useState(localStorage.getItem('email') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For toggling the dropdown
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
   
      // If already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
     else {
      // If on another page, navigate to home and scroll after load
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
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <div id="navbar">
      <nav id="nav">
        <div className="logo">
          <h4>CashFlow</h4>
        </div>
        <div id="links">
        <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
        <a onClick={() => scrollToSection('services')} className="nav-link">Services</a>
        <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
        <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>

          {isAuthenticated ? (
            <div className="user-info">
              <FaUserCircle className="user-icon" onClick={toggleDropdown}/>
              <h2 id="loggedinusername">{loggedInUser}</h2>
              <button onClick={handleLogout} id="button">Logout</button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                <div className="dropdown-menu">
                  <h4>{loggedInUser}</h4>
                  <p>Email: {emailuser}</p>
                  <p>Phone: XXXXXXXXXXXXXXXX</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
            <div className="user-info" id='button'>
              <Link to="/signup" className="nav-link">Signup</Link>
            </div>
            <div className="user-info" id='button'>
              <Link to="/login" className="nav-link">Login</Link>
           </div>
           </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
