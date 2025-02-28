import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaChartLine, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import './CSS/home.css'; // Use a single CSS file

function MainPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle authentication status updates
    const updateAuthStatus = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', updateAuthStatus);
    return () => {
      window.removeEventListener('storage', updateAuthStatus);
    };
  }, []);

  useEffect(() => {
    // Handle scrolling when navigating from another page
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay ensures page is fully loaded
      }
      else{
        console.log("Element not found");
      }
    }
  }, [location]);

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
      {/* Home Section */}
      <section id="home" className="home-container">
        <div className="home">
          <h1 className="animate-text" style={{ color: strongColor }} onMouseOut={change1}>
            Track Your <span id='span' onMouseOver={change} style={{ color: spanColor }}>Finance</span>
          </h1>
          <h2 className="animate-text">"Save money and money will save you."</h2>

          {isAuthenticated ? (
            <div className="buttons11">
              <button id='button12' type="button" onClick={() => navigate('/add-expense')}>Add Expense</button>
              <button id='button12' type="button" onClick={() => navigate('/view-expense')}>View Expense</button>
            </div>
          ) : (
            <h3 style={{ color: "red" }}>Please Login First To Add Expenses</h3>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-container">
        <div className="services-wrapper">
          <h1>Our Services</h1>
          <p>Explore the features that make managing your finances easier!</p>

          <div className="services-grid">
            <div className="service-card">
              <FaChartLine className="service-icon" />
              <h3>Expense Tracking</h3>
              <p>Monitor and categorize your spending in real-time.</p>
            </div>

            <div className="service-card">
              <FaShieldAlt className="service-icon" />
              <h3>Secure Transactions</h3>
              <p>Keep your financial data safe with top security measures.</p>
            </div>

            <div className="service-card">
              <FaMoneyBillWave className="service-icon" />
              <h3>Budget Planning</h3>
              <p>Set monthly budgets and save smarter with our AI-powered insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-container">
        <div className="about_conatiner1">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>CashFlow</strong>, a personal finance manager designed to help you track and manage your expenses easily.
          </p>
          <p>
            Our goal is to make personal finance management simpler, allowing you to stay on top of your spending and savings.
            You can add daily expenses, track your spending habits, and plan your budget effectively.
          </p>
          <p>
            Whether you're looking to keep track of your groceries, entertainment, or any other expenses, <strong>CashFlow</strong> is here to help!
          </p>
          <h2>How it works</h2>
          <ul>
            <li>Add your daily expenses with just a few clicks.</li>
            <li>View your expenses over time to understand your spending patterns.</li>
            <li>Save money by managing your finances effectively!</li>
          </ul>
          <p>Thank you for choosing <strong>CashFlow</strong>. We hope it helps you take control of your financial future!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-container">
        <form className="contact-form">
          <h1>Contact Us</h1>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />

          <label>Email</label>
          <input type="email" placeholder="Your Email" />

          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default MainPage;
