import React from "react";
import "./about.css";
import { ChevronRight } from "lucide-react";
import imageabout from "../../assets/aboutimg.jpg"
 import { IoMdPerson } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
 
const About = () => {
  return (
    <div className="about-container">
      <div className="cart-image">
        <div className="cart-color">
          <h1>About Us</h1>
          <p>
            Home <ChevronRight strokeWidth={2} /> About us
          </p>         
        </div>
      </div>
         <div className="about-content">
           <div className="about-image">
             <img src={imageabout} alt="Devich Clothing" />
           </div>
           <div className="about-text">
             <h2>About Devich Clothing</h2>
             <p>At Devich Clothing, we believe in fashion that empowers and inspires. Founded in 2020, our brand is dedicated to creating high-quality, sustainable clothing that combines style, comfort, and ethical practices.</p>
             <p>Our collection features meticulously crafted shoes and pants made from premium materials. We prioritize sustainability in every step of our process, from sourcing eco-friendly fabrics to supporting local artisans.</p>
             <div className="values-section">
               <h3>Our Values</h3>
               <ul>
                 <li><strong>Sustainability:</strong> Committed to eco-friendly production.</li>
                 <li><strong>Craftsmanship:</strong> Attention to detail in every piece.</li>
                 <li><strong>Community:</strong> Supporting artisans and customers alike.</li>
               </ul>
             </div>
             <p>Join us in redefining fashion with conscience. Explore our collection and discover pieces that reflect your values and enhance your style.</p>
           </div>
         </div>
    </div>
  );
};

export default About;
