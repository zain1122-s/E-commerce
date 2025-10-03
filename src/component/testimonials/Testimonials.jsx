import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "shahzain",
      review: "Amazing quality shoes! I've never felt so comfortable and stylish at the same time. Highly recommend Devich Clothing!",
      rating: 5,
      image: "https://i.pinimg.com/736x/2b/cc/55/2bcc55b3291035c4e53afbaa5dd1ae83.jpg"
    },
    {
      id: 2,
      name: "ahmed",
      review: "The pants are fantastic. Great fit and the material is top-notch. Fast shipping and excellent customer service.",
      rating: 5,
      image: "https://i.pinimg.com/736x/3c/2b/ad/3c2badd0b9688bcb810ef699afc3f7c1.jpg"
    },
    {
      id: 3,
      name: "khalid",
      review: "Love the variety! Found exactly what I was looking for. The website is easy to navigate and the products are as described.",
      rating: 5,
      image: "https://i.pinimg.com/736x/50/1d/f1/501df15ed64623ab3b8054eb2b9bb0d0.jpg"
    }
  ];

  return (
    <div className="testimonials-container">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <div className="rating">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
            </div>
            <p className="testimonial-review">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;