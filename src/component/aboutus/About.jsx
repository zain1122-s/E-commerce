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
         <div className="about-category">
        <div className="about-left">
            <img src={imageabout} alt="error" />

            <div className="logo-category">
             <div className="logo-1"> <p><IoMdPerson /> Admin</p></div>
              <div className="logo-2"><p><FaCalendarAlt /> 12 oct 2023</p></div>
              <div className="logo-3"><p></p></div>
            </div>
           
        </div>
        
        <div className="about-right"></div>
       </div>
    </div>
  );
};

export default About;
