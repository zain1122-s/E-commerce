import React, { useState } from "react";
import "./Shop.css";
import { Share2, GitCompare, Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/useWishlist";
import { useCart } from "../context/useCart";
import { useSearch } from "../context/useSearch";

// Import all shoe images
import shoe1 from "../../assets/zynshoes/shoe1.jpg";
import shoe3 from "../../assets/zynshoes/shoe3.jpg";
import shoe4 from "../../assets/zynshoes/shoe4.jpg";
import shoe5 from "../../assets/zynshoes/shoe5.jpg";
import shoe6 from "../../assets/zynshoes/shoe6.jpg";
import shoe7 from "../../assets/zynshoes/shoe7.jpg";
import shoe8 from "../../assets/zynshoes/shoe8.jpg";
import shoe9 from "../../assets/zynshoes/shoe9.jpg";
import shoe10 from "../../assets/zynshoes/shoe10.jpg";
import shoe11 from "../../assets/zynshoes/shoe11.jpg";
import shoe12 from "../../assets/zynshoes/shoe12.jpg";
import shoe13 from "../../assets/zynshoes/shoe13.jpg";
import shoe14 from "../../assets/zynshoes/shoe14.jpg";
import shoe15 from "../../assets/zynshoes/shoe15.jpg";
import shoe16 from "../../assets/zynshoes/shoe16.jpg";
import shoe17 from "../../assets/zynshoes/shoe17.jpg";
import shoe111 from "../../assets/zynshoes/shoe111.png";
import shoee2 from "../../assets/zynshoes/shoee2.jpg";
import zynshoe from "../../assets/zynshoes/zynshoe.jpg";

const Shop = () => {
  const [limits, setLimits] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [selectedSize, setSelectedSize] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { searchTerm } = useSearch();

  const shoeCollection = [
    {
      id: 1,
      image: shoe1,
      title: "ZYN Classic Brown Leather",
      category: "Formal",
      price: 189,
      originalPrice: 249,
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["Brown", "Black"],
      material: "Genuine Leather",
      description: "Premium handcrafted leather shoes perfect for formal occasions and business meetings.",
      features: ["Genuine Leather", "Comfortable Sole", "Handcrafted", "Durable"],
      rating: 4.8,
      reviews: 124,
      inStock: true,
      isNew: true,
      discount: 24
    },
    {
      id: 2,
      image: shoee2,
      title: "ZYN Sport Elite Runner",
      category: "Athletic",
      price: 225,
      originalPrice: 275,
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black", "Blue"],
      material: "Mesh & Synthetic",
      description: "High-performance running shoes with advanced cushioning technology for athletes.",
      features: ["Breathable Mesh", "Shock Absorption", "Lightweight", "Anti-Slip"],
      rating: 4.9,
      reviews: 89,
      inStock: true,
      isNew: false,
      discount: 18
    },
    {
      id: 3,
      image: shoe3,
      title: "ZYN Urban Casual",
      category: "Casual",
      price: 165,
      originalPrice: 195,
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Grey", "Navy", "Brown"],
      material: "Canvas & Leather",
      description: "Modern urban design combining comfort and style for everyday wear.",
      features: ["Canvas Upper", "Leather Accents", "Flexible Sole", "Stylish"],
      rating: 4.6,
      reviews: 156,
      inStock: true,
      isNew: false,
      discount: 15
    },
    {
      id: 4,
      image: shoe4,
      title: "ZYN Professional Oxford",
      category: "Formal",
      price: 275,
      originalPrice: 325,
      sizes: ["8", "9", "10", "11", "12"],
      colors: ["Black", "Brown", "Burgundy"],
      material: "Premium Leather",
      description: "Elegant Oxford shoes crafted for business professionals and formal events.",
      features: ["Oxford Style", "Premium Leather", "Classic Design", "Professional"],
      rating: 4.7,
      reviews: 78,
      inStock: true,
      isNew: true,
      discount: 15
    },
    {
      id: 5,
      image: shoe5,
      title: "ZYN Comfort Walker",
      category: "Casual",
      price: 145,
      originalPrice: 175,
      sizes: ["6", "7", "8", "9", "10", "11"],
      colors: ["Beige", "Brown", "Black"],
      material: "Soft Leather",
      description: "Ultra-comfortable walking shoes designed for all-day comfort and support.",
      features: ["Memory Foam", "Arch Support", "Breathable", "Lightweight"],
      rating: 4.5,
      reviews: 203,
      inStock: true,
      isNew: false,
      discount: 17
    },
    {
      id: 6,
      image: shoe6,
      title: "ZYN Adventure Hiking",
      category: "Outdoor",
      price: 195,
      originalPrice: 235,
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["Brown", "Green", "Black"],
      material: "Waterproof Leather",
      description: "Durable hiking boots built for outdoor adventures and challenging terrains.",
      features: ["Waterproof", "Ankle Support", "Grip Sole", "Durable"],
      rating: 4.8,
      reviews: 67,
      inStock: true,
      isNew: true,
      discount: 17
    },
    {
      id: 7,
      image: shoe7,
      title: "ZYN Luxury Edition",
      category: "Luxury",
      price: 320,
      originalPrice: 399,
      sizes: ["8", "9", "10", "11", "12"],
      colors: ["Black", "Brown", "Tan"],
      material: "Italian Leather",
      description: "Handcrafted luxury shoes made from finest Italian leather with premium details.",
      features: ["Italian Leather", "Handcrafted", "Luxury Design", "Premium Quality"],
      rating: 4.9,
      reviews: 45,
      inStock: true,
      isNew: true,
      discount: 20
    },
    {
      id: 8,
      image: shoe8,
      title: "ZYN Street Style",
      category: "Casual",
      price: 155,
      originalPrice: 185,
      sizes: ["6", "7", "8", "9", "10", "11"],
      colors: ["White", "Black", "Grey"],
      material: "Synthetic & Mesh",
      description: "Trendy street-style sneakers perfect for casual outings and urban lifestyle.",
      features: ["Street Style", "Comfortable", "Trendy Design", "Versatile"],
      rating: 4.4,
      reviews: 134,
      inStock: true,
      isNew: false,
      discount: 16
    },
    {
      id: 9,
      image: shoe9,
      title: "ZYN Executive Loafer",
      category: "Formal",
      price: 285,
      originalPrice: 340,
      sizes: ["8", "9", "10", "11", "12"],
      colors: ["Black", "Brown", "Navy"],
      material: "Premium Leather",
      description: "Sophisticated loafers designed for executives and business professionals.",
      features: ["Slip-On Design", "Premium Leather", "Executive Style", "Comfortable"],
      rating: 4.7,
      reviews: 92,
      inStock: true,
      isNew: false,
      discount: 16
    },
    {
      id: 10,
      image: shoe10,
      title: "ZYN Fashion Forward",
      category: "Fashion",
      price: 175,
      originalPrice: 210,
      sizes: ["6", "7", "8", "9", "10", "11"],
      colors: ["Red", "Blue", "Black"],
      material: "Synthetic Leather",
      description: "Fashion-forward design with contemporary appeal for style-conscious individuals.",
      features: ["Fashion Design", "Contemporary", "Stylish", "Eye-catching"],
      rating: 4.3,
      reviews: 167,
      inStock: true,
      isNew: true,
      discount: 17
    },
    {
      id: 11,
      image: shoe11,
      title: "ZYN Heritage Classic",
      category: "Classic",
      price: 245,
      originalPrice: 295,
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["Brown", "Black", "Tan"],
      material: "Full Grain Leather",
      description: "Classic heritage design combining traditional craftsmanship with modern comfort.",
      features: ["Heritage Design", "Full Grain Leather", "Traditional Craft", "Timeless"],
      rating: 4.8,
      reviews: 88,
      inStock: true,
      isNew: false,
      discount: 17
    },
    {
      id: 12,
      image: shoe12,
      title: "ZYN Performance Pro",
      category: "Athletic",
      price: 205,
      originalPrice: 245,
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White", "Blue"],
      material: "Performance Mesh",
      description: "High-performance athletic shoes engineered for serious athletes and fitness enthusiasts.",
      features: ["Performance Mesh", "Energy Return", "Stability", "Professional"],
      rating: 4.6,
      reviews: 112,
      inStock: true,
      isNew: true,
      discount: 16
    },
    {
      id: 13,
      image: shoe13,
      title: "ZYN Signature Collection",
      category: "Signature",
      price: 295,
      originalPrice: 350,
      sizes: ["8", "9", "10", "11", "12"],
      colors: ["Black", "Brown", "Wine"],
      material: "Signature Leather",
      description: "Exclusive signature collection featuring unique design elements and premium materials.",
      features: ["Signature Design", "Exclusive", "Premium Materials", "Unique"],
      rating: 4.9,
      reviews: 56,
      inStock: true,
      isNew: true,
      discount: 16
    },
    {
      id: 14,
      image: shoe14,
      title: "ZYN Comfort Plus",
      category: "Comfort",
      price: 135,
      originalPrice: 165,
      sizes: ["6", "7", "8", "9", "10", "11"],
      colors: ["Grey", "Brown", "Black"],
      material: "Soft Synthetic",
      description: "Maximum comfort shoes with extra cushioning and support for all-day wear.",
      features: ["Extra Cushioning", "All-day Comfort", "Supportive", "Soft Materials"],
      rating: 4.4,
      reviews: 189,
      inStock: true,
      isNew: false,
      discount: 18
    },
    {
      id: 15,
      image: shoe15,
      title: "ZYN Elite Runner Pro",
      category: "Athletic",
      price: 215,
      originalPrice: 255,
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["Blue", "Black", "White"],
      material: "Advanced Mesh",
      description: "Professional running shoes with cutting-edge technology for elite performance.",
      features: ["Elite Performance", "Advanced Tech", "Professional", "Cutting-edge"],
      rating: 4.7,
      reviews: 73,
      inStock: true,
      isNew: true,
      discount: 16
    },
    {
      id: 16,
      image: shoe16,
      title: "ZYN Contemporary Style",
      category: "Fashion",
      price: 185,
      originalPrice: 220,
      sizes: ["6", "7", "8", "9", "10", "11"],
      colors: ["White", "Black", "Grey"],
      material: "Modern Synthetic",
      description: "Contemporary design with modern appeal perfect for fashion-conscious individuals.",
      features: ["Contemporary", "Modern Appeal", "Fashion-forward", "Stylish"],
      rating: 4.5,
      reviews: 145,
      inStock: true,
      isNew: false,
      discount: 16
    },
    {
      id: 17,
      image: shoe17,
      title: "ZYN Classic White",
      category: "Classic",
      price: 165,
      originalPrice: 195,
      sizes: ["6", "7", "8", "9", "10", "11"],
      colors: ["White", "Cream", "Off-white"],
      material: "Premium Canvas",
      description: "Clean white design with classic appeal, perfect for any casual or semi-formal occasion.",
      features: ["Classic White", "Clean Design", "Versatile", "Timeless"],
      rating: 4.6,
      reviews: 198,
      inStock: true,
      isNew: false,
      discount: 15
    },
    {
      id: 18,
      image: shoe111,
      title: "ZYN Premium Collection",
      category: "Premium",
      price: 350,
      originalPrice: 425,
      sizes: ["8", "9", "10", "11", "12"],
      colors: ["Black", "Brown", "Burgundy"],
      material: "Exotic Leather",
      description: "Ultra-premium collection featuring exotic materials and exceptional craftsmanship.",
      features: ["Exotic Materials", "Ultra-premium", "Exceptional Craft", "Luxury"],
      rating: 5.0,
      reviews: 34,
      inStock: true,
      isNew: true,
      discount: 18
    },
    {
      id: 19,
      image: zynshoe,
      title: "ZYN Original Heritage",
      category: "Heritage",
      price: 199,
      originalPrice: 235,
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["Brown", "Black", "Tan"],
      material: "Heritage Leather",
      description: "The original ZYN design that started our legacy, combining tradition with innovation.",
      features: ["Original Design", "Heritage", "Traditional", "Legacy"],
      rating: 4.8,
      reviews: 267,
      inStock: true,
      isNew: false,
      discount: 15
    }
  ];

  // Filter and sort logic
  let filteredShoes = shoeCollection.filter(shoe => {
    const matchesSearch = shoe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shoe.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || shoe.category === selectedCategory;
    const matchesPrice = shoe.price >= priceRange[0] && shoe.price <= priceRange[1];
    const matchesSize = selectedSize === '' || shoe.sizes.includes(selectedSize);
    
    return matchesSearch && matchesCategory && matchesPrice && matchesSize;
  });

  if (sortBy === 'price-low') {
    filteredShoes = filteredShoes.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredShoes = filteredShoes.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'newest') {
    filteredShoes = filteredShoes.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  } else if (sortBy === 'rating') {
    filteredShoes = filteredShoes.sort((a, b) => b.rating - a.rating);
  }

  const displayShoes = filteredShoes.slice(0, limits);

  const handleToggle = () => {
    if (limits === 12) {
      setLimits(filteredShoes.length);
    } else {
      setLimits(12);
    }
  };

  const handleShoeClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleWishlistToggle = (e, shoe) => {
    e.stopPropagation();
    const wishlistProduct = {
      id: shoe.id,
      name: shoe.title,
      price: shoe.price,
      image: shoe.image
    };
    toggleWishlist(wishlistProduct);
  };

  const handleAddToCart = (e, shoe) => {
    e.stopPropagation();
    const cartProduct = {
      id: shoe.id,
      name: shoe.title,
      price: shoe.price,
      image: shoe.image
    };
    addToCart(cartProduct, 1);
  };

  const categories = ['All', ...new Set(shoeCollection.map(shoe => shoe.category))];
  const sizes = ['6', '7', '8', '9', '10', '11', '12'];

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>ZYN Shoe Collection</h1>
        <p>Discover our premium collection of handcrafted shoes</p>
      </div>

      <div className="shop-filters">
        <div className="filter-group">
          <label>Category:</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Size:</label>
          <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            <option value="">All Sizes</option>
            {sizes.map(size => (
              <option key={size} value={size}>Size {size}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Sort By:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="filter-group price-range">
          <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          />
        </div>
      </div>

      <div className="shop-results">
        <p>Showing {displayShoes.length} of {filteredShoes.length} shoes</p>
      </div>

      <div className="shoe-grid">
        {displayShoes.map((shoe) => (
          <div className="shoe-card" key={shoe.id} onClick={() => handleShoeClick(shoe.id)}>
            <div className="shoe-image-container">
              <img src={shoe.image} alt={shoe.title} className="shoe-image" />
              {shoe.isNew && <span className="badge new">NEW</span>}
              {shoe.discount > 0 && <span className="badge discount">-{shoe.discount}%</span>}
              
              <div className="shoe-overlay">
                <button 
                  className="add-to-cart-btn"
                  onClick={(e) => handleAddToCart(e, shoe)}
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
                <div className="shoe-actions">
                  <button onClick={(e) => handleWishlistToggle(e, shoe)}>
                    <Heart 
                      size={16} 
                      fill={isInWishlist(shoe.id) ? 'red' : 'none'}
                      stroke={isInWishlist(shoe.id) ? 'red' : 'currentColor'}
                    />
                  </button>
                  <button><Share2 size={16} /></button>
                  <button><GitCompare size={16} /></button>
                </div>
              </div>
            </div>

            <div className="shoe-info">
              <div className="shoe-category">{shoe.category}</div>
              <h3 className="shoe-title">{shoe.title}</h3>
              <div className="shoe-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-text">({shoe.reviews} reviews)</span>
              </div>
              <div className="shoe-price">
                <span className="current-price">${shoe.price}</span>
                {shoe.originalPrice > shoe.price && (
                  <span className="original-price">${shoe.originalPrice}</span>
                )}
              </div>
              <div className="shoe-features">
                {shoe.features.slice(0, 2).map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredShoes.length > 12 && (
        <div className="load-more">
          <button className="load-more-btn" onClick={handleToggle}>
            {limits === 12 ? `Show All ${filteredShoes.length} Shoes` : "Show Less"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;