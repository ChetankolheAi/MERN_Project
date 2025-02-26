import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './home.css';

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    const updateAuthStatus = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', updateAuthStatus);
    return () => {
      window.removeEventListener('storage', updateAuthStatus);
    };
  }, []);
  if(!isAuthenticated){
    alert("Please Login First To Add Expenses")
  }

  return (
    <div className="container">
      <section className="home-container">
        <h1 className="animate-text">
          Track Your <span>Finance</span>
        </h1>
        <h2 className="animate-text">"Save money and money will save you."</h2>

        {isAuthenticated ? (
          <>
            <button type="button" onClick={() => navigate('/add-expense')}>Add Expense</button>
            <button type="button" onClick={() => navigate('/view-expense')}>View Expense</button>
          </>
        ) : (
          <h3>Please Login First To Add Expenses</h3>
        )}
      </section>
    </div>
  );
}

export default Home;
