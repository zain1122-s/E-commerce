import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Cart.css"; // Optional: Create Cart.css for styling
import { useCart } from "../context/useCart";
import { ChevronRight, Trash2 } from "lucide-react";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineTrophy } from "react-icons/hi2";
import { GoVerified } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";
import Footer from "../footer/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const location = useLocation();
  const [checkOut, setCheckOut] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Check for contact parameter in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('contact') === 'true') {
      setShowContact(true);
      setCheckOut(false);
    }
  }, [location]);

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

          {!checkOut && !showContact ? (
            <p>
              Home <ChevronRight strokeWidth={2} /> Cart
            </p>
          ) : checkOut ? (
            <p>
              Home <ChevronRight strokeWidth={2} /> CheckOut
            </p>
          ) : (
            <p>
              Home <ChevronRight strokeWidth={2} /> Contact
            </p>
          )}
        </div>
      </div>
      {!checkOut && !showContact ? (
        <div className="cart-container">
          <div className="cart-left">
            <div className="cart-heading">
              <div className="product">Product</div>
              <div className="product-info">
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Subtotal</h1>
              </div>
            </div>

            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <span>{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
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
                <span className="cart-subtotal">${subtotal.toFixed(2)}</span>
              </div>

              <div className="cart-row">
                <span className="cart-label total-label">Total</span>
                <span className="cart-total">${total.toFixed(2)}</span>
              </div>

              <button className="cart-btn" onClick={() => setCheckOut(true)}>
                Check Out
              </button>
              <button className="cart-btn">
                <FaApple size={32} />
                Pay
              </button>
              <button className="cart-btn gpay-btn">
                <FcGoogle size={32} />
                Pay
              </button>
            </div>
          </div>
        </div>
      ) : checkOut ? (
        // ✅ Checkout Page
        <div className="checkout-container">
          <div className="left-checkout">
            <div className="checkout-heading">
              <h1>Billing Detail</h1>
            </div>
            <div className="name-box">
              <div className="f-name">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="l-name">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>

            <div className="company-name">
              <label>Company Name (Optional)</label>
              <input type="text" />
            </div>

            <div className="checkout-location">
              <label>Country / Location</label>
              <select className="Custom-location">
                <option>pakistan</option>
                <option>India</option>
                <option>Austraila</option>
                <option>UAE</option>
                <option>USA</option>
                <option>Nepal</option>
                <option>Bengal</option>
                <option>Srilanka</option>
              </select>
            </div>
            <div className="address">
              <label>street Address</label>
              <input type="text" />
            </div>
            <div className="town-checkout">
              <label>Town / City</label>
              <input type="text" />
            </div>
            <div className="Province">
              <label>Province</label>
              <select className="Custom-province">
                <option>pakistan</option>
                <option>India</option>
                <option>Austraila</option>
                <option>UAE</option>
                <option>USA</option>
                <option>Nepal</option>
                <option>Bengal</option>
                <option>Srilanka</option>
              </select>
            </div>

            <div className="zip-code">
              <label>Zip Code</label>
              <input type="text" />
            </div>
            <div className="zip-code">
              <label>Cupon Code</label>
              <input type="text" />
            </div>
            <div className="zip-code">
              <label>Phone</label>
              <input type="text" />
            </div>
            <div className="zip-code">
              <label>Email Address</label>
              <input type="text" />
            </div>
          </div>
          <div className="right-checkout">
            <div className="product-title">
              <div className="product">
                <h1>Product</h1>
                {cartItems.map((item) => (
                  <p key={item.id} className="p1">{item.name} x {item.quantity}</p>
                ))}
                <p>Subtotal</p>
                <p>Total</p>
              </div>
              <div className="subtotal">
                <h1>Subtotal</h1>
                {cartItems.map((item) => (
                  <p key={item.id} className="p2">${(item.price * item.quantity).toFixed(2)}</p>
                ))}
                <p className="p2">${subtotal.toFixed(2)}</p>
                <p className="p3">${total.toFixed(2)}</p>
              </div>
            </div>
            <div className="right-options">
              <div className="opt">
                <input type="radio" />
                <label htmlFor="">Direct Bank Transfer</label>
              </div>

              <p>
                Make your payment directly into our bank account. Please use
                <br /> your Order ID as the payment reference. Your order will
                not be <br /> shipped until the funds have cleared in our
                account.
              </p>

              <div className="opt">
                <input type="radio" />
                <label style={{ color: "gray" }}>Direct Bank Transfer</label>
              </div>
              <div className="opt">
                <input type="radio" />
                <label style={{ color: "gray" }}>Cash on Delivery</label>
              </div>

              <div className="option-para">
                <p>
                  Your personal data will be used to support your experience{" "}
                  <br />
                  throughout this website, to manage access to your account, and{" "}
                  <br /> for other purposes described in our{" "}
                  <span style={{ fontWeight: "bold" }}>
                    privacy policy.
                  </span>{" "}
                </p>
              </div>
            </div>
            <button
              className="placeodr"
              onClick={() => {
                setCheckOut(false);
                setShowContact(true);
              }}
            >
              place order
            </button>
          </div>

        </div>
      ) : (
        <div className="contact-container">
          <div className="contact-top">
            <h1>Get In Touch With Us</h1>
            <p>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us <br />
              An Email. Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
            </p>
          </div>
          <div className="contact-bottom">
            <div className="contact-left">
              <div className="address">
                <div className="logo">
                  <FaLocationDot size={25} />
                </div>
                <div className="address-data">
                  <h1>Address</h1>
                  <p>
                    Devich Holzjdnashdf GMBH <br />
                    Basen591 <br />
                    6952 Hittisau <br />
                    Austria
                  </p>
                </div>
              </div>
              <div className="phone">
                <div className="logo">
                  <FaPhoneAlt size={25} />
                </div>
                <div className="number">
                  <h1>Phone</h1>
                  <p>0032 3929 2922</p>
                </div>
              </div>
              <div className="time">
                <div className="logo">
                  <IoTime size={25} />
                </div>
                <div className="time-data">
                  <h1>Working Time</h1>
                  <p>
                    Monday to Saturday 9:00 <br />
                    am to 5:00 pm <br />
                    Closed on Sunday and <br />
                    Public holiday
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <div className="contact-info">
                <label>Your Name</label>
                <input type="text" placeholder="abc" />
              </div>
              <div className="contact-email">
                <label>Email address</label>
                <input type="text" placeholder="abc@gmail" />
              </div>
               <div className="contact-email">
                <label>Subject</label>
                <input type="text" placeholder="This is an option" />
              </div>
               <div className="contact-message">
                <label>message</label>
                <input type="text" placeholder="hi! i'd like to ask about" className="message-input"/>
              </div>

              <div className="contact-butn">
                <button className="contact-button">Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}

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
