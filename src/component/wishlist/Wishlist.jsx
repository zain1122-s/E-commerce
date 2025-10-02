import React from "react";
import "./Wishlist.css";
import { useWishlist } from "../context/useWishlist";
import { useCart } from "../context/useCart";
import { ChevronRight, Trash2, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    // Optionally remove from wishlist after adding to cart
    // removeFromWishlist(product.id);
  };

  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id);
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="wishlist-main">
      <div className="wishlist-header">
        <div className="wishlist-header-content">
          <h1>Wishlist</h1>
          <p>
            Home <ChevronRight strokeWidth={2} /> Wishlist
          </p>
        </div>
      </div>

      <div className="wishlist-container">
        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <h2>Your wishlist is empty</h2>
            <p>Add some products to your wishlist to see them here!</p>
            <button 
              className="continue-shopping-btn"
              onClick={() => navigate('/home')}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="wishlist-header-row">
              <div className="product-col">Product</div>
              <div className="price-col">Price</div>
              <div className="actions-col">Actions</div>
            </div>

            <div className="wishlist-items">
              {wishlistItems.map((item) => (
                <div key={item.id} className="wishlist-item">
                  <div className="product-info">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      onClick={() => handleProductClick(item.id)}
                    />
                    <div className="product-details">
                      <h3 onClick={() => handleProductClick(item.id)}>{item.name}</h3>
                      {/* <p>Product ID: {item.id}</p> */}
                    </div>
                  </div>
                  
                  <div className="product-price">
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                  
                  <div className="product-actions">
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingCart size={1} />
                      add to cart
                    </button>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="wishlist-summary">
              <p>Total items in wishlist: {wishlistItems.length}</p>
              <button 
                className="clear-wishlist-btn"
                onClick={() => {
                  wishlistItems.forEach(item => removeFromWishlist(item.id));
                }}
              >
                Clear Wishlist
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;