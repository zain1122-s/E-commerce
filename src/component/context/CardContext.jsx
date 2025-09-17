import React, { createContext, useState } from 'react';

const CardContext = createContext();

export { CardContext };

export const CardProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    console.log('addToCart called with product:', product, 'quantity:', quantity);
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      let newCart;
      if (existing) {
        newCart = prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newCart = [...prev, { ...product, quantity }];
      }
      console.log('New cart state:', newCart);
      return newCart;
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CardContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CardContext.Provider>
  );
};