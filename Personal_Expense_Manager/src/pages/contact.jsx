import React from 'react';
import './CSS/contact.css'; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
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
    </div>
  );
}

export default Contact;
