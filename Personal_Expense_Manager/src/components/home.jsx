import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
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
  const [strongColor, setStrongColor] = useState("white"); 
  const [spanColor, setSpanColor] = useState("rgb(0, 243, 0)"); 

  const change = () => {
    setStrongColor("rgb(0, 243, 0)");
    setSpanColor("white");
  };

  const change1 = () => {
    setStrongColor("white");
    setSpanColor("rgb(0, 243, 0)");
  };

  return (
    <div className="container">
      <section className="home-container">
      <h1 className="animate-text" style={{ color: strongColor }} onMouseOut={change1}>
          Track Your <span id='span' onMouseOver={change} style={{ color: spanColor }}>Finance</span>
        </h1>
        <h2 className="animate-text">"Save money and money will save you."</h2>

        {isAuthenticated ? (
          <div className="butttons">
            <button id='button1' type="button" onClick={() => navigate('/add-expense')}>Add Expense</button>
            <button id='button1' type="button" onClick={() => navigate('/view-expense')}>View Expense</button>
            </div>
        ) : (
          <h3>Please Login First To Add Expenses</h3>
        )}
      </section>
    </div>
  );
}

export default Home;
