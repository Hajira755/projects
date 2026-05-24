import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  // ✅ Updated to consider quantity too
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.newPrice.replace(/[^0-9.]/g, ""));
      return total + price * (item.quantity || 1);
    }, 0);
  };

  const totalAmount = calculateTotal(); // ✅ used in CheckOut.jsx
  const shippingFee = 199;
  const grandTotal = totalAmount + shippingFee;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        calculateTotal,
        totalAmount,
        shippingFee,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Custom Hook
export const useCart = () => useContext(CartContext);
