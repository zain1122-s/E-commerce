import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="upper-footer">
        <div className="box1">
          <h1>ZYN.</h1>
          <p>
            ZYN stylooo GmbH <br />
            Basen 592 <br />
            6952 Hittisau <br />
            Austria
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        <div className="box2">
          <div className="links">
            <h1>Links</h1>
          </div>

          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/cart?contact=true">Contact</Link>
        </div>
        <div className="box3">
          <h1>Help</h1>
          <h2>Payment Options</h2>
          <h2>Returns</h2>
          <h2>Privacy Poliucies</h2>
        </div>
        <div className="box4">
          <h1>NewLetter</h1>
          <div className="inp-but">
            <input type="email" placeholder="Entre Your Email address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="line"></div>
        <p>2025 ZYN. All right reserved </p>
      </div>
    </div>
  );
};

export default Footer;
