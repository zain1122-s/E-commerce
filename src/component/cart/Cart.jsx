import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css"; // Optional: Create Cart.css for styling
import { useCart } from "../context/useCart";
import { ChevronRight, Trash2 } from "lucide-react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { GoVerified } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";
import Footer from "../footer/Footer";
const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal; // assuming no tax or shipping for now


  return (
    <div className="cart-main">
      <div className="cart-image">
        <div className="cart-color">
          <h1>Cart</h1>
          <p>
            Home <ChevronRight strokeWidth={2} /> Cart
          </p>
        </div>
      </div>
        <div className="cart-container">
          <div className="cart-left">
            <div className="cart-heading">
              <div className="product">Product</div>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Subtotal</h1>
              <div></div>
            </div>

            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                    <span>€{item.price}</span>
                    <span>{item.quantity}</span>
                    <span>€{(item.price * item.quantity).toFixed(2)}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="cart-right">
            <div className="cart-container2">
              <h2 className="cart-title">Cart Totals</h2>

              <div className="cart-row">
                <span className="cart-label">Subtotal</span>
                <span className="cart-subtotal">€{subtotal.toFixed(2)}</span>
              </div>

              <div className="cart-row">
                <span className="cart-label total-label">Total</span>
                <span className="cart-total">€{total.toFixed(2)}</span>
              </div>

              <button className="cart-btn" onClick={() => navigate('/checkout')}>
                Check Out
              </button>
            </div>
          </div>
        </div>

      <div className="cart-benefit">
        <div className="benefit1">
          <i>
            <HiOutlineTrophy size={35} />
          </i>
          <p>
            High Quality <br />
            <span>Crafted from top materials</span>
          </p>
        </div>
        <div className="benefit2">
          <i>
            <GoVerified size={35} />
          </i>
          <p>
            Warrant protection <br />
            <span>Over 2 year</span>
          </p>
        </div>
        <div className="benefit3">
          <i>
            <FiShoppingBag size={35} />
          </i>
          <p>
            Free Shipping <br />
            <span>Order Over 150$</span>
          </p>
        </div>

        <div className="benefit4">
          <i>
            <RiCustomerService2Fill size={35} />
          </i>
          <p>
            24/7 Support
            <br />
            <span>Dedicated Support</span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
