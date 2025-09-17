  import React, { useState } from "react";
  import "./Product.css";
  import { Share2, GitCompare, Heart } from "lucide-react";
  import { useNavigate } from "react-router-dom";
  import { useWishlist } from "../context/useWishlist";
  import { useCart } from "../context/useCart";
  import { useSearch } from "../context/useSearch";
  
  // Import all shoe images
  import shoe1 from "../../assets/zynshoes/shoe1.jpg";
  import shoe3 from "../../assets/zynshoes/shoe3.jpg";
  import shoe4 from "../../assets/zynshoes/shoe4.jpg";
  import shoe5 from "../../assets/zynshoes/shoe5.jpg";
  import shoe6 from "../../assets/zynshoes/shoe6.jpg";
  import shoe7 from "../../assets/zynshoes/shoe7.jpg";
  import shoe8 from "../../assets/zynshoes/shoe8.jpg";
  import shoe9 from "../../assets/zynshoes/shoe9.jpg";
  import shoe10 from "../../assets/zynshoes/shoe10.jpg";
  import shoe11 from "../../assets/zynshoes/shoe11.jpg";
  import shoe12 from "../../assets/zynshoes/shoe12.jpg";
  import shoe13 from "../../assets/zynshoes/shoe13.jpg";
  import shoe14 from "../../assets/zynshoes/shoe14.jpg";
  import shoe15 from "../../assets/zynshoes/shoe15.jpg";
  import shoe16 from "../../assets/zynshoes/shoe16.jpg";
  import shoe17 from "../../assets/zynshoes/shoe17.jpg";
  import shoe111 from "../../assets/zynshoes/shoe111.png";
  import shoee2 from "../../assets/zynshoes/shoee2.jpg";
  import zynshoe from "../../assets/zynshoes/zynshoe.jpg";
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
      },
      {
        id: 9,
        image: shoe9,
        title: "ZYN Executive",
        artical: "Article ZYN009",
        price: "$285",
        category: "Shoes",
        new: true,
        persent: false,
        description: "Executive level shoes for corporate professionals"
      },
      {
        id: 10,
        image: shoe10,
        title: "ZYN Trendsetter",
        artical: "Article ZYN010",
        price: "$175",
        category: "Shoes",
        new: true,
        persent: false,
        description: "Trendy shoes that set fashion standards"
      },
      {
        id: 11,
        image: shoe11,
        title: "ZYN Heritage",
        artical: "Article ZYN011",
        price: "$245",
        category: "Shoes",
        new: false,
        persent: true,
        description: "Classic heritage design with modern comfort"
      },
      {
        id: 12,
        image: shoe12,
        title: "ZYN Performance",
        artical: "Article ZYN012",
        price: "$205",
        category: "Shoes",
        new: true,
        persent: false,
        description: "High-performance shoes for active individuals"
      },
      {
        id: 13,
        image: shoe13,
        title: "ZYN Signature",
        artical: "Article ZYN013",
        price: "$295",
        category: "Shoes",
        new: true,
        persent: false,
        description: "Signature collection with unique design elements"
      },
      {
        id: 14,
        image: shoe14,
        title: "ZYN Comfort Plus",
        artical: "Article ZYN014",
        price: "$135",
        category: "Shoes",
        new: false,
        persent: true,
        description: "Extra comfortable shoes with cushioned sole"
      },
      {
        id: 15,
        image: shoe15,
        title: "ZYN Elite Runner",
        artical: "Article ZYN015",
        price: "$215",
        category: "Shoes",
        new: false,
        persent: false,
        description: "Professional running shoes with advanced technology"
      },
      {
        id: 16,
        image: shoe16,
        title: "ZYN Fashion Forward",
        artical: "Article ZYN016",
        price: "$185",
        category: "Shoes",
        new: false,
        persent: true,
        description: "Fashion-forward design with contemporary appeal"
      },
      {
        id: 17,
        image: shoe17,
        title: "ZYN Classic White",
        artical: "Article ZYN017",
        price: "$165",
        category: "Shoes",
        new: false,
        persent: true,
        description: "Clean white design perfect for any occasion"
      },
      {
        id: 18,
        image: shoe111,
        title: "ZYN Premium Collection",
        artical: "Article ZYN018",
        price: "$350",
        category: "Shoes",
        new: true,
        persent: false,
        description: "Premium collection with exclusive materials"
      },
      {
        id: 19,
        image: zynshoe,
        title: "ZYN Original",
        artical: "Article ZYN019",
        price: "$199",
        category: "Shoes",
        new: true,
        persent: false,
        description: "Original ZYN design that started it all"
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
