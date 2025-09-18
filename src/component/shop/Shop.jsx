import React, { useState } from "react";
import "./Shop.css";
import { Share2, GitCompare, Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/useWishlist";
import { useCart } from "../context/useCart";
import { useSearch } from "../context/useSearch";
import shoeCollection from "../../data/shoes";
import pantCollection from "../../data/pants";

const Shop = () => {
  const [limits, setLimits] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [selectedSize, setSelectedSize] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [productType, setProductType] = useState('shoes');

  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { searchTerm } = useSearch();

  const currentCollection = productType === 'shoes' ? shoeCollection : pantCollection;
  const shoeSizes = ['6', '7', '8', '9', '10', '11', '12'];
  const pantSizes = ['26', '28', '30', '32', '34', '36', '38', '40'];
  const currentSizes = productType === 'shoes' ? shoeSizes : pantSizes;



  // Filter and sort logic
  let filteredProducts = currentCollection.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSize = selectedSize === '' || product.sizes.includes(selectedSize);

    return matchesSearch && matchesCategory && matchesPrice && matchesSize;
  });

  if (sortBy === 'price-low') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'newest') {
    filteredProducts = filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  } else if (sortBy === 'rating') {
    filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const displayProducts = filteredProducts.slice(0, limits);

  const handleToggle = () => {
    if (limits === 12) {
      setLimits(filteredProducts.length);
    } else {
      setLimits(12);
    }
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}?type=${productType}`);
  };

  const handleWishlistToggle = (e, product) => {
    e.stopPropagation();
    const wishlistProduct = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      type: productType
    };
    toggleWishlist(wishlistProduct);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    const cartProduct = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      type: productType
    };
    addToCart(cartProduct, 1);
  };

  const categories = ['All', ...new Set(currentCollection.map(product => product.category))];

  return (
    <div className="shop-container">
      <div className="shop-sidebar">
        <div className="sidebar-header">
          <h2>Filters</h2>
        </div>

        <div className="sidebar-section">
          <h3>Product Type</h3>
          <div className="product-type-buttons">
            <button
              className={productType === 'shoes' ? 'active' : ''}
              onClick={() => {
                setProductType('shoes');
                setSelectedCategory('All');
                setSelectedSize('');
              }}
            >
              Shoes
            </button>
            <button
              className={productType === 'pants' ? 'active' : ''}
              onClick={() => {
                setProductType('pants');
                setSelectedCategory('All');
                setSelectedSize('');
              }}
            >
              Pants
            </button>
          </div>
        </div>

        <div className="sidebar-section">
          <h3>Categories</h3>
          <ul className="category-list">
            <li
              className={selectedCategory === 'All' ? 'active' : ''}
              onClick={() => setSelectedCategory('All')}
            >
              All Categories
            </li>
            {categories.filter(cat => cat !== 'All').map(category => (
              <li
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h3>Size</h3>
          <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            <option value="">All Sizes</option>
            {currentSizes.map(size => (
              <option key={size} value={size}>Size {size}</option>
            ))}
          </select>
        </div>

        <div className="sidebar-section">
          <h3>Sort By</h3>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="sidebar-section">
          <h3>Price Range</h3>
          <label>€{priceRange[0]} - €{priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          />
        </div>
      </div>

      <div className="shop-main">
        <div className="shop-header">
          <h1>ZYN {productType === 'shoes' ? 'Shoe' : 'Pant'} Collection</h1>
          <p>Discover our premium collection of {productType === 'shoes' ? 'handcrafted shoes' : 'stylish pants'}</p>
        </div>

        <div className="shop-results">
          <p>Showing {displayProducts.length} of {filteredProducts.length} {productType}</p>
        </div>

        <div className="product-grid">
          {displayProducts.map((product) => (
            <div className="product-card" key={product.id} onClick={() => handleProductClick(product.id)}>
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
                {product.isNew && <span className="badge new">NEW</span>}
                {product.discount > 0 && <span className="badge discount">-{product.discount}%</span>}

                <div className="product-overlay">
                  <button
                    className="add-to-cart-btn"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                  <div className="product-actions">
                    <button onClick={(e) => handleWishlistToggle(e, product)}>
                      <Heart
                        size={16}
                        fill={isInWishlist(product.id) ? 'red' : 'none'}
                        stroke={isInWishlist(product.id) ? 'red' : 'currentColor'}
                      />
                    </button>
                    <button><Share2 size={16} /></button>
                    <button><GitCompare size={16} /></button>
                  </div>
                </div>
              </div>

              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-text">({product.reviews} reviews)</span>
                </div>
                <div className="product-price">
                  <span className="current-price">€{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="original-price">€{product.originalPrice}</span>
                  )}
                </div>
                <div className="product-features">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length > 12 && (
          <div className="load-more">
            <button className="load-more-btn" onClick={handleToggle}>
              {limits === 12 ? `Show All ${filteredProducts.length} ${productType}` : "Show Less"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;