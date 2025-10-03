  import React, { useState, useEffect, Suspense } from "react";
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
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { searchTerm } = useSearch();
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products`);
          const data = await response.json();
          const mappedProducts = data.map(product => ({
            id: product._id,
            title: product.name,
            price: `$${product.price}`,
            category: product.category,
            image: product.image,
            description: product.description,
            article: `Article ${product._id.slice(-4)}`,
            new: false, // TODO: add logic
            persent: false, // TODO: add logic
          }));
          setProducts(mappedProducts);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchProducts();
    }, []);
    
  let filteredProducts = products.filter(product =>
    (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.article.toLowerCase().includes(searchTerm.toLowerCase())) &&
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
        <h1>Featured Products</h1>
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
          {loading ? (
            <div className="loading">Loading products...</div>
          ) : (
            displayProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          )}
        </div>
        
          
        <button className="more" onClick={handleToggle}>
          {limits === 8 ? "Show More" : limits === filteredProducts.length ? "Show Less" : "Reset"}
        </button>
          
        

      </div>
    );
  };

  export default Products;
