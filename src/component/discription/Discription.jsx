import React, { useState } from "react";
import "./Discription.css";
const Discription = () => {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch(activeTab) {
      case 'description':
        return (
          <div className="discription-para">
            <p>
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and <br />{" "}
              sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p>
              Woody® Classic Black Leather Sneaker – Nature Meets Craft <br />
              Step into comfort with a touch of nature. The Woody® Classic Sneaker
              blends traditional craftsmanship with modern design. <br /> Featuring
              a sleek black leather upper and a signature wooden sole, this shoe
              delivers both durability and distinction. Hand- <br />
              stitched detailing and natural materials provide breathable comfort,
              while the curved ergonomic sole supports a healthy, <br />
              balanced stride.
            </p>
            <p>Whether you're strolling through the city or escapting to nature, this sneakers is your everyday companion - rooted in traditional, <br /> crafted for now</p>
          </div>
        );
      case 'additional':
        return (
          <div className="discription-para">
            <p><strong>Material:</strong> Premium leather and wood composite</p>
            <p><strong>Care Instructions:</strong> Clean with damp cloth, avoid direct sunlight</p>
            <p><strong>Warranty:</strong> 2 years on manufacturing defects</p>
          </div>
        );
      case 'reviews':
        return (
          <div className="discription-para">
            <p><strong>Customer Reviews:</strong></p>
            <p>⭐⭐⭐⭐⭐ "Excellent quality and comfort!" - John D.</p>
            <p>⭐⭐⭐⭐⭐ "Perfect fit and stylish design." - Sarah M.</p>
            <p>⭐⭐⭐⭐⭐ "Highly recommend for everyday wear." - Mike R.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="discription-container">
      <div className="discription-heading">
        <h1
          className={activeTab === 'description' ? 'active' : ''}
          onClick={() => setActiveTab('description')}
        >
          Description
        </h1>
        <h1
          className={activeTab === 'additional' ? 'active' : ''}
          onClick={() => setActiveTab('additional')}
        >
          Additional Information
        </h1>
        <h1
          className={activeTab === 'reviews' ? 'active' : ''}
          onClick={() => setActiveTab('reviews')}
        >
          Review [5]
        </h1>
      </div>
      {renderContent()}

      <div className="discription-image">
        <img src="https://i.pinimg.com/1200x/95/31/d7/9531d726be4727207d93c175435be6f7.jpg" alt="err" />
        <img src="https://i.pinimg.com/1200x/96/a8/c5/96a8c54bd1ca0ac3192c5f998033674d.jpg" alt="err" />
      </div>
    </div>
  );
};

export default Discription;
