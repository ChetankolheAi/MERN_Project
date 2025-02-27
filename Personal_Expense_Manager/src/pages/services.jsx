import React from 'react';
import { FaChartLine, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';
import './CSS/services.css';

function Services() {
  return (
    <div className="services-container">
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
  );
}

export default Services;
