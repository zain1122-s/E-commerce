import React, { useState, Suspense } from 'react';
import { Share2, GitCompare, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/useWishlist";
import { useCart } from "../context/useCart";

// Lazy load images
const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="image-container">
      {!loaded && !error && <div className="image-placeholder">Loading...</div>}
      {error && <div className="image-error">Image not available</div>}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'loaded' : ''}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
      />
    </div>
  );
};

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    const wishlistProduct = {
      id: product.id,
      name: product.title,
      price: parseFloat(product.price.replace('$', '')),
      image: product.image
    };
    toggleWishlist(wishlistProduct);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const cartProduct = {
      id: product.id,
      name: product.title,
      price: parseFloat(product.price.replace('$', '')),
      image: product.image
    };
    addToCart(cartProduct, 1);
  };

  return (
    <div className="product-data" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <LazyImage src={product.image} alt={product.title} className="picture" />
      {product.new && <span className="badge">NEW</span>}
      {product.persent && <span className="badge2">SALE</span>}

      <div className="overlay">
        <button onClick={handleAddToCart}>Add to cart</button>
        <div className="actions">
          <span>
            <Share2 strokeWidth={0.75} />
            Share
          </span>
          <span>
            <GitCompare strokeWidth={0.75} /> Compare
          </span>
          <span
            onClick={handleWishlistToggle}
            className={`wishlist-action ${isInWishlist(product.id) ? 'favorited' : ''}`}
          >
            <Heart
              strokeWidth={0.75}
              fill={isInWishlist(product.id) ? 'red' : 'none'}
              stroke={isInWishlist(product.id) ? 'red' : 'currentColor'}
            /> Like
          </span>
        </div>
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.artical}</p>
        <div>
          <span className="price">{product.price}</span>
          <span className="old-price">$3500</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;