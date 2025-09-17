import React, { useState } from "react";
import "./Productdetail.css";
import { ChevronRight, Heart } from "lucide-react";
import { MdStarRate } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Discription from "../discription/discription";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useWishlist } from "../context/useWishlist";


const Productdetail = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const {addToCart}=useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Product data array (should be shared, but for now here)
  const productcards = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/2a/25/46/2a25463b691968413766eb1e1aa9d0a9.jpg",
      title: "sam Nero-Grigio",
      artical: "Artical 90184",
      price: "$2400",
      category: "Shoes",
      new: true,
      persent: false,
    },
    // Add more as needed
  ];

  const product = productcards.find(p => p.id === parseInt(id)) || productcards[0];

  const handleadd = () => {
    setCount(count + 1);
  };
  const handlesub = () => {
    setCount(count - 1);
  };


const handleAddToCart = () => {
  addToCart(product, count);
  navigate("/cart");
};

const handleWishlistToggle = () => {
  toggleWishlist(product);
};

  const productallimage = [
    {
      allimgsrc: "https://i.pinimg.com/736x/fb/7e/fb/fb7efb33aa9c1c23ef46b39750165fb9.jpg",
    },
    {
      allimgsrc:
        "https://i.pinimg.com/736x/eb/39/f0/eb39f07faae07f994fa9036fa23a2b2b.jpg",
    },
    {
      allimgsrc:
        "https://i.pinimg.com/736x/39/e2/0f/39e20f6b8d2b3d6021b815f948b8ee3b.jpg",
    },
    {
      allimgsrc:
        "https://i.pinimg.com/1200x/35/ba/1d/35ba1d98fd0f1a79487f715f0a52a5fe.jpg",
    },
    {
      allimgsrc:
        "https://i.pinimg.com/736x/e8/23/c9/e823c9e11e934d16e8cf13a7f0ec18fe.jpg",
    },
  ];
  const productimage = [
    {
      imgsrc:
        "https://i.pinimg.com/736x/21/ff/ed/21ffedbff6ea5a5ac225eb31feff4aed.jpg",
    },
  ];
  const pairshoes = [
    {
      pairimg:
        "https://i.pinimg.com/1200x/bd/8d/30/bd8d30dab11b0bfff2a66304ade9c915.jpg",
    },
    {
      pairimg:
        "https://i.pinimg.com/736x/99/c9/d4/99c9d49a1b9300e11e05517ab45b9f77.jpg",
    },
    {
      pairimg:
        "https://i.pinimg.com/736x/1c/6a/38/1c6a38f753a465323d3e631520e441b2.jpg",
    },
    {
      pairimg:
        "https://i.pinimg.com/736x/af/4d/97/af4d97545e91390f6b24bb1d5c7f0231.jpg",
    },
    {
      pairimg:
        "https://i.pinimg.com/736x/a7/f8/b6/a7f8b6a7dc4ace9b9c01913f8d2c8a90.jpg",
    },
    {
      pairimg:
        "https://i.pinimg.com/736x/9b/b3/fc/9bb3fcd5050fd11b1fcd3c36498586b2.jpg",
    },
    {
      pairimg:
        "https://i.pinimg.com/736x/18/60/07/186007765453e12e9e8a719db95f8e84.jpg",
    },
    {
      pairimg:
        "https://i.pinimg.com/736x/6c/8f/cd/6c8fcdd47d2df19b1ed9824592ee6eb3.jpg",
    },
  ];

  return (
    <div className="productdetail-container">

      <div className="productdetail-navbar">
        <div className="details-navbar">
          <h1>Home</h1>
          <p>
            <ChevronRight strokeWidth={2} />
          </p>
          <h1>Shop</h1>
          <p>
            <ChevronRight strokeWidth={2} />
          </p>
          <h1>
            <span style={{ color: "black" }}>|</span> {product.title}
          </h1>
        </div>
      </div>

      <div className="product-detail">
        <div className="left-productdetail">
          <div className="products-allimages">
            {productallimage.map((item, index) => (
              <div className="allimage" key={index}>
                <img src={item.allimgsrc} alt="alliamge" />
              </div>
            ))}
          </div>
          <div className="product-image">
            {productimage.map((item, index) => (
              <div className="display-image" key={index}>
                <img src={item.imgsrc} alt="logo" />
              </div>
            ))}
          </div>
        </div>

        <div className="product-contant">
          <div className="contant">
            <div className="contant1">
              <div className="product-title-section">
                <h1>{product.title}</h1>
                <Heart
                  size={24}
                  className={`heart-icon ${isInWishlist(product.id) ? 'favorited' : ''}`}
                  onClick={handleWishlistToggle}
                  fill={isInWishlist(product.id) ? 'red' : 'none'}
                  stroke={isInWishlist(product.id) ? 'red' : 'currentColor'}
                />
              </div>
              <p className="price">{product.price}</p>
              <p className="rating">
                <MdStarRate color="orange" />
                <MdStarRate color="orange" />
                <MdStarRate color="orange" />
                <MdStarRate color="orange" />  |  4 star review
              </p>
              <p className="para">
                Step into comfort with a touch of nature. The woody classic{" "}
                <br />
                sneakers blend traditional craftsmanship with modern design.{" "}
                <br />
                Featuring a sleek black leather upper and a signature wooden{" "}
                <br />
                sole, this shoe delivers both durability and distinction.
              </p>
            </div>
            <div className="contant2">
              <h1 className="heading">Size</h1>
              <div className="select-wrapper">
                <select className="custom-select">
                  <option>43</option>
                  <option>42</option>
                  <option>41</option>
                  <option>40</option>
                </select>
              </div>
             <p className="img-detail">Other shoes paira</p>
              <div className="pair-image">
                 
                {pairshoes.map((item, index) => (
                  <div className="pair-image" key={index}>
                    <img src={item.pairimg} alt="error" />
                  </div>
                ))}
              </div>
              <div className="button-section">
                <div className="counter">
                  <button onClick={handlesub}>-</button>
                  <span>{count}</span>
                  <button onClick={handleadd}>+</button>
                </div>
                <div className="cart-add">
                    <button onClick={handleAddToCart}>Add To Cart</button>
                  </div>
              </div>
            </div>
            <div className="contant-line"></div>
            <div className="contant3">
              <div className="contant-info">
                <p>Artical : {product.artical}</p>
                <p>Category : {product.category}</p>
                <p>Tags : Step, Style, Sole, Shop</p>
                <p>Share : <FaFacebook color="black" /> <FaLinkedin color="black"/> <AiFillTwitterCircle color="black"/></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Discription/>
    </div>
  
  );
};

export default Productdetail;
