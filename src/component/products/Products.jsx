  import React, { useState, Suspense } from "react";
  import "./Product.css";
  import { useNavigate } from "react-router-dom";
  import { useWishlist } from "../context/useWishlist";
  import { useCart } from "../context/useCart";
  import { useSearch } from "../context/useSearch";
  import ProductCard from "./ProductCard";

  // Import required images
  import shoe1 from "../../assets/zynshoes/shoe1.jpg";
  import shoee2 from "../../assets/zynshoes/shoee2.jpg";
  import shoe3 from "../../assets/zynshoes/shoe3.jpg";
  import shoe4 from "../../assets/zynshoes/shoe4.jpg";
  import shoe5 from "../../assets/zynshoes/shoe5.jpg";
  import shoe6 from "../../assets/zynshoes/shoe6.jpg";
  import shoe7 from "../../assets/zynshoes/shoe7.jpg";
  import shoe8 from "../../assets/zynshoes/shoe8.jpg";
  const Products = () => {
    const[limits, setLimits] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('default');
    const navigate=useNavigate();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { searchTerm } = useSearch();
  // Sample products - in production, fetch from backend API
  const productcards = [
    {
      id: 1,
      image: shoe1,
      title: "ZYN Classic Brown",
      artical: "Article ZYN001",
      price: "$189",
      category: "Shoes",
      new: true,
      persent: false,
      description: "Premium leather classic brown shoes with comfortable sole"
    },
    {
      id: 2,
      image: shoee2,
      title: "ZYN Sport Elite",
      artical: "Article ZYN002",
      price: "$225",
      category: "Shoes",
      new: false,
      persent: true,
      description: "High-performance athletic shoes for active lifestyle"
    },
    {
      id: 3,
      image: shoe3,
      title: "ZYN Urban Style",
      artical: "Article ZYN003",
      price: "$165",
      category: "Shoes",
      new: false,
      persent: false,
      description: "Modern urban design with superior comfort"
    },
    {
      id: 4,
      image: shoe4,
      title: "ZYN Professional",
      artical: "Article ZYN004",
      price: "$275",
      category: "Shoes",
      new: false,
      persent: true,
      description: "Elegant professional shoes for business occasions"
    },
    {
      id: 5,
      image: shoe5,
      title: "ZYN Casual Comfort",
      artical: "Article ZYN005",
      price: "$145",
      category: "Shoes",
      new: true,
      persent: false,
      description: "Comfortable casual shoes for everyday wear"
    },
    {
      id: 6,
      image: shoe6,
      title: "ZYN Adventure",
      artical: "Article ZYN006",
      price: "$195",
      category: "Shoes",
      new: true,
      persent: false,
      description: "Durable outdoor shoes for adventure enthusiasts"
    },
    {
      id: 7,
      image: shoe7,
      title: "ZYN Luxury Edition",
      artical: "Article ZYN007",
      price: "$320",
      category: "Shoes",
      new: false,
      persent: true,
      description: "Premium luxury shoes with handcrafted details"
    },
    {
      id: 8,
      image: shoe8,
      title: "ZYN Street Walker",
      artical: "Article ZYN008",
      price: "$155",
      category: "Shoes",
      new: false,
      persent: false,
      description: "Stylish street shoes with modern design"
    }
  ];
    
  let filteredProducts = productcards.filter(product =>
    (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.artical.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'All' || product.category === selectedCategory)
  );

  if (sortBy === 'price-low') {
    filteredProducts = filteredProducts.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
  } else if (sortBy === 'price-high') {
    filteredProducts = filteredProducts.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
  } else if (sortBy === 'newest') {
    filteredProducts = filteredProducts.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
  }

  const displayProducts = filteredProducts.slice(0, limits);

  const handleToggle = () => {
    if (limits === 8) {
      setLimits(filteredProducts.length);
    } else if (limits === filteredProducts.length) {
      setLimits(8);
    } else {
      setLimits(8);
    }
  };

  return (
      <div className="Product-container">
        <h1>Our Products</h1>
        <div className="filters">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="product-cards">
          <Suspense fallback={<div className="loading">Loading products...</div>}>
            {displayProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </Suspense>
        </div>
        
          
        <button className="more" onClick={handleToggle}>
          {limits === 8 ? "Show More" : limits === filteredProducts.length ? "Show Less" : "Reset"}
        </button>
          
        

      </div>
    );
  };

  export default Products;
