import React from 'react';
import './CSS/about.css'; 

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>CashFlow</strong>, a personal finance manager designed to help you track and manage your expenses easily.
      </p>
      <p>
        Our goal is to make personal finance management simpler, allowing you to stay on top of your spending and savings. You can add daily expenses, track your spending habits, and plan your budget effectively.
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
      <p>
        Thank you for choosing <strong>CashFlow</strong>. We hope it helps you take control of your financial future!
      </p>
    </div>
  );
}

export default About;
