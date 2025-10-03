import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import shoeImage from "../../assets/zynshoes/shoe1.jpg";
import pantImage from "../../assets/pant/pant1.jpg";

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (type) => {
    navigate(`/shop?type=${type}`);
  };

  const categories = [
    {
      id: 1,
      name: "Shoes",
      image: shoeImage,
      description: "Explore our stylish shoe collection"
    },
    {
      id: 2,
      name: "Pants",
      image: pantImage,
      description: "Discover comfortable and trendy pants"
    }
  ];

  return (
    <div className="categories-container">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.name.toLowerCase())}
          >
            <img src={category.image} alt={category.name} />
            <div className="category-overlay">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;