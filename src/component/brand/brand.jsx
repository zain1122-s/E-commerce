import React from "react";
import "./brand.css";
import shoe1 from "../../assets/zynshoes/shoe1.jpg";
import shoe3 from "../../assets/zynshoes/shoe3.jpg";
import shoe4 from "../../assets/zynshoes/shoe4.jpg";

const Brand = () => {
  const brandcards = [
    {
      imagecard: shoe1,
      title: "ZYN Classic Brown Leather",
    },
    {
      imagecard: shoe3,
      title: "ZYN Urban Casual",
    },
    {
      imagecard: shoe4,
      title: "ZYN Professional Oxford",
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
