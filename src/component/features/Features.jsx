import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Free shipping on all orders over $50"
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "100% secure payment processing"
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description: "30-day return policy on all items"
    },
    {
      icon: "⭐",
      title: "Quality Guarantee",
      description: "Premium quality products guaranteed"
    }
  ];

  return (
    <div className="features-container">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;