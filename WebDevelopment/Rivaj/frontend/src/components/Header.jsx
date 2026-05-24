import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartSidebar from "./CartSidebar";
import SignUp from "./SignUp"; // ✅ import your SignUp/Login sidebar component

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // ✅ new state for login sidebar

  // ✅ Toggle handlers
  const toggleCart = () => {
    setShowCart((prev) => !prev);
    setShowLogin(false); // close login if cart opens
  };

  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
    setShowCart(false); // close cart if login opens
  };

  return (
    <header className="bg-pink-50 shadow-md relative z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Search Bar */}
        <SearchBar />

        {/* Logo */}
        <div className="flex justify-center py-4">
          <a href="/">
            <img src={logo} alt="Logo" className="h-12" />
          </a>
        </div>

        {/* Icons */}
        <div className="flex space-x-4 text-xl">
          {/* 👤 Login icon */}
          <button onClick={toggleLogin}>👤</button>

          {/* 🛒 Cart icon */}
          <div className="relative">
            <button onClick={toggleCart}>🛒</button>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 🔽 Sidebars */}
      <CartSidebar isVisible={showCart} onClose={() => setShowCart(false)} />
      <SignUp isVisible={showLogin} onClose={() => setShowLogin(false)} />
    </header>
  );
};

export default Header;
