import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./explore.css";

import shoe5 from "../../assets/zynshoes/shoe5.jpg";
import shoe6 from "../../assets/zynshoes/shoe6.jpg";
import shoe7 from "../../assets/zynshoes/shoe7.jpg";
import shoe8 from "../../assets/zynshoes/shoe8.jpg";

const explorecards = [
  {
    id: 1,
    title: "Nature Peace",
    subtitle: "Woody shoe",
    picture: shoe5,
  },
  {
    id: 2,
    title: "Mountain Spirit",
    subtitle: "Wooden Boot",
    picture: shoe6,
  },
  {
    id: 3,
    title: "Forest Vibes",
    subtitle: "Classic Shoe",
    picture: shoe7,
  },
  {
    id: 4,
    title: "Wild Soul",
    subtitle: "Leather Boot",
    picture: shoe8,
  },
];

const Explore = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % explorecards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? explorecards.length - 1 : prev - 1
    );
  };

  return (
    <div className="explore-container">
      {/* Left section */}
      <div className="explore-left">
        <h1>
          Discover Our <br /> Unique Fashion <br /> Collection
        </h1>
        <p>
          Explore our handcrafted designs that blend <br />
          style, comfort, and innovation for every occasion.
        </p>
        <button onClick={() => navigate('/shop')}>Explore More</button>
      </div>

      {/* Right section (Slider) */}
      <div className="explore-right">
        <div className="slide">
          <img
            src={explorecards[activeIndex].picture}
            alt={explorecards[activeIndex].title}
          />
          <div className="slide-overlay">
            <span>
              0{explorecards[activeIndex].id} —{" "}
              {explorecards[activeIndex].subtitle}
            </span>
            <h2>{explorecards[activeIndex].title}</h2>
            <button className="arrow-btn">→</button>
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <button onClick={prevSlide}>‹</button>
          <button onClick={nextSlide}>›</button>
        </div>

        {/* Dots */}
        <div className="dots">
          {explorecards.map((_, i) => (
            <span
              key={i}
              className={i === activeIndex ? "dot active" : "dot"}
              onClick={() => setActiveIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
