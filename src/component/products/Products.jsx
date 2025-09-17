  import React, { useState } from "react";
  import "./Product.css";
  import { Share2, GitCompare, Heart } from "lucide-react";
  import { useNavigate } from "react-router-dom";
  import { useWishlist } from "../context/useWishlist";
  import { useCart } from "../context/useCart";
  import { useSearch } from "../context/useSearch";
  const Products = () => {
    const[limits, setLimits] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('default');
    const navigate=useNavigate();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();
    const { searchTerm } = useSearch();
    const productcards = [
      {
        id: 1,
        image:
          "https://i.pinimg.com/736x/2a/25/46/2a25463b691968413766eb1e1aa9d0a9.jpg",
        title: "sam Nero-Grigio",
        artical: "Artical 90184",
        price: "$2400",
        category: "Shoes",
        new: true,
        persent: false,
      },
      {
        id: 2,
        image:
          "https://i.pinimg.com/736x/b0/27/3a/b0273a493df3f6b66ea6ef63e96eff4d.jpg",
        title: "Wooden shoe",
        artical: "Artical 90184",
        price: "$2003",
        category: "Shoes",
        new: false,
        persent: true,
      },
      {
        id: 3,
        image:
          "https://i.pinimg.com/736x/19/09/f4/1909f4a47046f00ff6a8619143330a1b.jpg",
        title: "sam Nero-Grigio",
        artical: "Artical 90184",
        price: "$2400",
        new: false,
        persent: false,
      },
      {
        id: 4,
        image:
          "https://i.pinimg.com/736x/f3/b5/76/f3b576c8eeeb329ee383fa610021fcef.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: false,
        persent: true,
      },
      {
        id: 5,
        image:
          "https://i.pinimg.com/1200x/98/d1/9b/98d19b753c86339f1225fde95694a04a.jpg",
        title: "sam Nero-Grigio",
        artical: "Artical 90184",
        price: "$2400",
        new: true,
        persent: false,
      },
      {
        id: 6,
        image:
          "https://i.pinimg.com/736x/13/61/14/136114b1f4f231a692442ad784463e24.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: true,
        persent: false,
      },
      {
        id: 7,
        image:
          "https://i.pinimg.com/1200x/6c/ca/0d/6cca0d1be94d1e5efdd690dae5ada8c2.jpg",
        title: "sam Nero-Grigio",
        artical: "Artical 90184",
        price: "$2400",
        new: false,
        persent: true,
      },
      {
        id: 8,
        image:
          "https://i.pinimg.com/736x/68/44/f9/6844f924902800b4b7d0f17f4439d2a6.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: false,
        persent: false,
      },
      {
        id: 9,
        image:
          "https://i.pinimg.com/1200x/2a/c2/8d/2ac28dd555326f60d02d9328f6609b17.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: true,
        persent: false,
      },
      {
        id: 10,
        image:
          "https://i.pinimg.com/736x/13/61/14/136114b1f4f231a692442ad784463e24.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: true,
        persent: false,
      },
      {
        id: 11,
        image:
          "https://i.pinimg.com/1200x/e9/de/0a/e9de0a0d5bd6779bd38c19e75f8a9baf.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: false,
        persent: true,
      },
      {
        id: 12,
        image:
          "https://i.pinimg.com/1200x/e8/67/9d/e8679d716f8e0b095972c446cc3a6176.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: true,
        persent: false,
      },
      {
        id: 13,
        image:
          "https://i.pinimg.com/736x/dd/e1/5d/dde15dda36c022b5485ec27744b0b787.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: true,
        persent: false,
      },
      {
        id: 14,
        image:
          "https://i.pinimg.com/1200x/7b/67/95/7b6795274371ebc5717b02c1e686b66c.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: false,
        persent: true,
      },
      {
        id: 15,
        image:
          "https://i.pinimg.com/736x/b1/91/07/b1910716b328a6e17bdda01b4e40bbed.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: false,
        persent: false,
      },
      {
        id: 16,
        image:
          "https://i.pinimg.com/1200x/a1/84/41/a18441b327f69991569f262f7c3bd12f.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: false,
        persent: true,
      },
      {
        id: 17,
        image:
          "https://i.pinimg.com/736x/dc/9e/82/dc9e827891b352117dd2679e27e9b1cf.jpg",
        title: "Wooden shoes",
        artical: "Artical 90184",
        price: "$2400",
        new: false,
        persent: true,
      },
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

  const handleToggle=()=>{
    if(limits===8){
      setLimits(filteredProducts.length)
    }else if (limits ===filteredProducts.length){
      setLimits(8)
    }else{
      setLimits(8)
    }
  }

  const handleclick=(id)=> {
    navigate(`/products/${id}`)
  }

  const handleWishlistToggle = (e, product) => {
    e.stopPropagation(); // Prevent navigation when clicking heart
    const wishlistProduct = {
      id: product.id,
      name: product.title,
      price: parseFloat(product.price.replace('$', '')),
      image: product.image
    };
    toggleWishlist(wishlistProduct);
  }

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent navigation when clicking add to cart
    const cartProduct = {
      id: product.id,
      name: product.title,
      price: parseFloat(product.price.replace('$', '')),
      image: product.image
    };
    addToCart(cartProduct, 1);
  }
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
          {displayProducts.map((item) => (
            <div className="product-data" key={item.id} onClick={()=>handleclick(item.id)} style={{cursor:"pointer"}}>
              <img src={item.image} className="picture" alt={item.title} />
              {item.new && <span className="badge">-30%</span>}
              {item.persent && <span className="badge2">NEW</span>}

              <div className="overlay">
                <button onClick={(e) => handleAddToCart(e, item)}>Add to cart</button>
                <div className="actions">
                  <span>
                    <Share2 strokeWidth={0.75} />
                    Share
                  </span>
                  <span>
                    <GitCompare strokeWidth={0.75} /> Compare
                  </span>
                  <span
                    onClick={(e) => handleWishlistToggle(e, item)}
                    className={`wishlist-action ${isInWishlist(item.id) ? 'favorited' : ''}`}
                  >
                    <Heart
                      strokeWidth={0.75}
                      fill={isInWishlist(item.id) ? 'red' : 'none'}
                      stroke={isInWishlist(item.id) ? 'red' : 'currentColor'}
                    /> Like
                  </span>
                </div>
              </div>

              <div className="product-info">
                <h2>{item.title}</h2>
                <p>{item.artical}</p>
                <div>
                  <span className="price">{item.price}</span>
                  <span className="old-price">$3500</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
          
        <button className="more" onClick={handleToggle}>
          {limits === 8 ? "Show More" : limits === filteredProducts.length ? "Show Less" : "Reset"}
        </button>
          
        

      </div>
    );
  };

  export default Products;
