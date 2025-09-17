import React, { useState } from "react";
import "./explore.css";

const explorecards = [
  {
    id: 1,
    title: "Nature Peace",
    subtitle: "Woody shoe",
    picture:
      "https://i.pinimg.com/1200x/44/f8/b6/44f8b674a566a1f9e53420473a80e848.jpg",
  },
  {
    id: 2,
    title: "Mountain Spirit",
    subtitle: "Wooden Boot",
    picture:
      "https://i.pinimg.com/1200x/1b/ac/8b/1bac8b13a974aec83f93863b6e514613.jpg",
  },
  {
    id: 3,
    title: "Forest Vibes",
    subtitle: "Classic Shoe",
    picture:
      "https://i.pinimg.com/736x/46/64/ea/4664ead82cdac5486557d65e2b93d83f.jpg",
  },
  {
    id: 4,
    title: "Wild Soul",
    subtitle: "Leather Boot",
    picture:
      "https://i.pinimg.com/1200x/d0/24/cc/d024ccadf1cd765e40668e27698b756c.jpg",
  },
];

const Explore = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
          Walk the Earth in <br /> Authentic Wood- <br /> Inspired Footwear
        </h1>
        <p>
          Our designer already made a lot of beautiful <br />
          prototypes of rooms that inspire you.
        </p>
        <button>Explore More</button>
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
