import React from "react";
import "./brand.css";
const Brand = () => {
  const brandcards = [
    {
      imagecard:
        "https://i.pinimg.com/736x/1f/88/1d/1f881d7cc0c81c5f2d0e7fc5c6a8190e.jpg",
      title: "Devich Wooden Shoes",
    },
    {
      imagecard:
        "https://i.pinimg.com/736x/31/c6/7e/31c67e9ea9a0c328cc960d33826f5c4c.jpg",
      title: "Woody Wooden Shoes",
    },
    {
      imagecard:
        "https://i.pinimg.com/1200x/65/65/a0/6565a0e9e51ddc9a008ad70f33e4e0fe.jpg",
      title: "Accessories",
    },
  ];
  return (
    <div className="brand-container">
      <div className="brand-top">
        <h1>Browse The Brand</h1>
        <p>
          Explore our full range of production and find what suits you best.
        </p>
      </div>
      <div className="brand-bottom">
        {brandcards.map((item, index) => (
          <div className="brand-card" key={index}>
            <img src={item.imagecard} />
            <h1>
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
