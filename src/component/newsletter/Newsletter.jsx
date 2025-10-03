import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setMessage("Thank you for subscribing! You'll receive our latest updates.");
      setEmail("");
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Stay Updated with Latest Trends</h2>
        <p>Subscribe to our newsletter and get exclusive offers, new arrivals, and fashion tips delivered to your inbox.</p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p className="newsletter-message">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;