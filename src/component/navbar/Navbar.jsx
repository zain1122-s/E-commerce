import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import image from "../../assets/shoeimage.png"
import { Search ,Heart,BaggageClaim , Menu,X} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/useWishlist';
import { useCart } from '../context/useCart';
import { useSearch } from '../context/useSearch';

const Navbar = () => {
  const[menuOpen,setMenuOpen]=useState(false)
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate=useNavigate();
  const { wishlistItems } = useWishlist();
  const { cartItems } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <>
      <div className='navbar-container'>
        <div className="navbar-logo">
          <Link to="/home">
            <img src={image} alt="logo" />
          </Link>
        </div>
        <div className={`navbar-content ${menuOpen ? "open":""  }`}>

          <Link to="/home">Home</Link>
          <a href="#shop">Shop</a>
          <a href="#accessories">Accessories</a>
          <a href="#coupen">Coupen</a>
          <Link to="/about">About</Link>
          <Link to="/cart?contact=true">Contact</Link>
        </div>
         <div className="navbar-icon">
          <div className="icon1" onClick={() => setSearchOpen(!searchOpen)}><Search strokeWidth={1.5} /></div>
          <div className="icon1 wishlist-icon" onClick={() => navigate('/wishlist')}>
            <Heart strokeWidth={1.5} />
            {wishlistItems.length > 0 && (
              <span className="wishlist-count">{wishlistItems.length}</span>
            )}
          </div>
          <div className="icon1 cart-icon" onClick={() => navigate('/cart')}>
            <BaggageClaim strokeWidth={1.5} />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            )}
          </div>
         </div>

         <div className="menu-button" onClick={()=>setMenuOpen(!menuOpen)}>
         {menuOpen ? <X size={28}/> : <Menu size={28}/>}
         </div>
      </div>
      {searchOpen && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
    </>
  )
}

export default Navbar
