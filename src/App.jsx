import React from "react";
import Signin from "./component/signin/Signin";
import Homepage from "./component/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Productdetail from "./component/Productdetail/Productdetail";
import Products from "./component/products/Products";
import Shop from "./component/shop/Shop";
import Layout from "./component/layout/Layout";
import Cart from "./component/cart/Cart";
import { CardProvider } from "./component/context/CardContext";
import { WishlistProvider } from "./component/context/WishlistContext";
import { SearchProvider } from "./component/context/SearchContext";
import { AuthProvider } from "./component/context/AuthContext";
import About from "./component/aboutus/About";
import Wishlist from "./component/wishlist/Wishlist";
import Checkout from "./component/checkout/Checkout";

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <CardProvider> {/* Wrap with provider */}
          <WishlistProvider> {/* Wrap with wishlist provider */}
            <div>
              <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/home" element={<Layout><Homepage /></Layout>} />
                <Route path="/shop" element={<Layout><Shop /></Layout>} />
                <Route path="products/:id" element={<Layout><Productdetail /></Layout>} />
                <Route path="/cart" element={<Layout><Cart /></Layout>} />
                <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/wishlist" element={<Layout><Wishlist /></Layout>} />
              </Routes>
            </div>
          </WishlistProvider>
        </CardProvider>
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;