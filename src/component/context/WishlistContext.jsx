import React, { createContext, useState } from 'react';

const WishlistContext = createContext();

export { WishlistContext };

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    console.log('addToWishlist called with product:', product);
    setWishlistItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        // If already in wishlist, don't add again
        console.log('Product already in wishlist');
        return prev;
      } else {
        const newWishlist = [...prev, product];
        console.log('New wishlist state:', newWishlist);
        return newWishlist;
      }
    });
  };

  const removeFromWishlist = (id) => {
    console.log('removeFromWishlist called with id:', id);
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const isInWishlist = (id) => {
    return wishlistItems.some(item => item.id === id);
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlistItems, 
      addToWishlist, 
      removeFromWishlist, 
      isInWishlist, 
      toggleWishlist 
    }}>
      {children}
    </WishlistContext.Provider>
  );
};