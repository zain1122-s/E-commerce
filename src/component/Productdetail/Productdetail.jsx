import React, { useState } from "react";
import "./Productdetail.css";
import { ChevronRight, Heart } from "lucide-react";
import { MdStarRate } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Discription from "../discription/Discription";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useWishlist } from "../context/useWishlist";
import shoeCollection from "../../data/shoes";
import pantCollection from "../../data/pants";

const Productdetail = () => {
  const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const productType = searchParams.get('type') || 'shoes';
  const currentCollection = productType === 'shoes' ? shoeCollection : pantCollection;
  const product = currentCollection.find(p => p.id === parseInt(id)) || currentCollection[0];

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, count);
    navigate("/cart");
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product);
  };

  const handleProductImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const productImages = product.images ? product.images : [product.image];

  return (
    <div className="productdetail-container">
      <div className="productdetail-navbar">
        <div className="details-navbar">
          <h1>Home</h1>
          <ChevronRight size={14} strokeWidth={2} />
          <h1>Shop</h1>
          <ChevronRight size={14} strokeWidth={2} />
          <h1>{productType.charAt(0).toUpperCase() + productType.slice(1)}</h1>
          <ChevronRight size={14} strokeWidth={2} />
          <h1><span style={{ color: "black" }}>|</span> {product.title}</h1>
        </div>
      </div>

      <div className="product-detail">
        <div className="left-productdetail">
          <div className="products-allimages">
            {productImages.map((imgSrc, index) => (
              <div
                className="allimage"
                key={index}
                onClick={() => handleProductImageClick(imgSrc)}
                style={{ cursor: "pointer" }}
              >
                <img src={imgSrc} alt={`product-${index}`} />
              </div>
            ))}
          </div>
          <div className="product-image">
            <img src={selectedImage || product.image} alt={product.title} />
          </div>
        </div>

        <div className="product-content">
          <div className="content-header">
            <h1>{product.title}</h1>
            <Heart
              size={24}
              className={`heart-icon ${isInWishlist(product.id) ? "favorited" : ""}`}
              onClick={handleWishlistToggle}
              fill={isInWishlist(product.id) ? "red" : "none"}
              stroke={isInWishlist(product.id) ? "red" : "currentColor"}
            />
          </div>
          <p className="price">€ {product.price}</p>
          <p className="rating">
            {[...Array(5)].map((_, i) => (
              <MdStarRate key={i} color={i < Math.round(product.rating) ? "orange" : "gray"} />
            ))}
            <span> {product.reviews} Customer Review{product.reviews > 1 ? "s" : ""}</span>
          </p>
          <p className="description">{product.description}</p>

          <div className="size-section">
            <h3>Size</h3>
            <select className="custom-select">
              {product.sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="other-shoes-pairs">
            <p>Other {productType.charAt(0).toUpperCase() + productType.slice(1)} Pairs</p>
            <div className="pair-images">
              {currentCollection.slice(0, 5).map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  onClick={() => navigate(`/products/${item.id}?type=${productType}`)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>

          <div className="quantity-addcart">
            <div className="counter">
              <button onClick={handleSub}>-</button>
              <span>{count}</span>
              <button onClick={handleAdd}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>

          <div className="product-info">
            <p>Article: {product.artical || "N/A"}</p>
            <p>Category: {product.category}</p>
            <p>Tags: Step, Style, Sole, Shop</p>
            <p>
              Share: <FaFacebook color="black" /> <FaLinkedin color="black" /> <AiFillTwitterCircle color="black" />
            </p>
          </div>
        </div>
      </div>

      <Discription />
    </div>
  );
};

export default Productdetail;
