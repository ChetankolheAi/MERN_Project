import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    const updateAuthStatus = () => {
      setLoggedInUser(localStorage.getItem('loggedInUser') || '');
      setIsAuthenticated(!!localStorage.getItem('token'));
    };

 
    window.addEventListener('storage', updateAuthStatus);
    return () => {
      window.removeEventListener('storage', updateAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if(confirmLogout){
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');

    //Notify all components (Navbar) about logout
    window.dispatchEvent(new Event('storage'));

    alert('User Logged Out Successfully');
    navigate('/login');
    }

  };

  return (
    <div id="navbar">
      <nav id="nav">
        <div className="logo">
          <h4>CashFlow</h4>
        </div>
        <div id="links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          
           
          {/* {isAuthenticated ?  <Link to="/view-expense">View Expense</Link> : (
             <Link to="/login">View Expense</Link>
          )}
          {isAuthenticated ?  <Link to="/add-expense">Add Expense</Link> : (
             <Link to="/login">Add Expense</Link>
          )}
           */}
          {isAuthenticated ? <></> : (
            <Link to="/signup">Signup</Link>
          )}
          
          {isAuthenticated ? (
            <>
              <h2 id='loggedinusername'>{loggedInUser}</h2>
              <button onClick={handleLogout} id='button'>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
