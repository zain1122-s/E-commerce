import React from "react";
import "./Homepage.css";
import Brand from "../brand/brand";
import Products from "../products/Products";
import Explore from "../../component/explore/Explore"
import Footer from "../footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage-container">

 
      <div className="homepage-content">
        <div className="homepage-card">
          <p>New Arrival</p>
          <h1>Welcome to <br /> Devich!</h1>
          <p>we've moved into our new building in Hittisau. <br />You can find us between hittisau and krumbach.</p>
           <button>Buy Now</button>
        </div>
      </div>
      <Brand/>
      <Products/>
      <Explore/>
      <Footer/>
    </div>
  );
};

export default Homepage;
