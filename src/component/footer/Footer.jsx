import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="upper-footer">
        <div className="box1">
          <h1>Devich.</h1>
          <p>
            Devich Holzschuherzeugung GmbH <br />
            Basen 592 <br />
            6952 Hittisau <br />
            Austria
          </p>
        </div>
        <div className="box2">
          <div className="links">
            <h1>Links</h1>
          </div>

          <h2>Home</h2>
          <h2>Shop</h2>
          <h2>Wooden shoes</h2>
          <h2>Woody Wooden Shoes</h2>
          <h2>About</h2>
          <h2>Contact</h2>
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
        <p>2025 Devich. All right reserved </p>
      </div>
    </div>
  );
};

export default Footer;
