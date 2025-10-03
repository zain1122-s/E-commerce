import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import Brand from "../brand/brand";
import Categories from "../categories/Categories";
import Products from "../products/Products";
import Explore from "../../component/explore/Explore"
import Testimonials from "../testimonials/Testimonials";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";

const Homepage = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/shop');
  };

  return (
    <div className="homepage-container">

      <div className="homepage-content">
        <div className="homepage-card">
          <p>Discover the Latest Trends</p>
          <h1>Step into Style with <br /> Devich Clothing</h1>
          <p>Explore our exclusive collection of shoes and pants. <br />Quality fashion for every occasion.</p>
          <button onClick={handleBuyNow}>Shop Now</button>
        </div>
      </div>
      <Brand/>
      <Categories/>
      {/* <Products/> */}
      <Explore/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Homepage;
