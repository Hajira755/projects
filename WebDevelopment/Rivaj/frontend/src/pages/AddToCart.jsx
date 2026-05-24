import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const AddToCart = () => {
  const { state: product } = useLocation();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const parsedPrice = parseFloat(product.newPrice.replace(/[^0-9.]/g, ""));
  const totalPrice = parsedPrice * quantity;

  const productWithQuantity = {
    ...product,
    quantity,
    price: parsedPrice,
  };

  const handleAddToCart = () => {
    addToCart(productWithQuantity);
  };

  const handleBuyNow = () => {
    addToCart(productWithQuantity);
    navigate("/checkout");
  };

  if (!product) {
    return <div className="text-center p-10 text-gray-500">No product selected.</div>;
  }

  return (
    <div>
      <Header />
      <NavBar />

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img src={product.img} alt={product.title} className="w-full h-auto object-contain" />
        </div>

        <div className="space-y-4">
          <span className="text-red-600 font-bold text-sm">{product.discount}</span>
          <h1 className="text-3xl font-semibold">{product.title}</h1>

          <div className="flex items-center space-x-4">
            <span className="line-through text-gray-400">{product.oldPrice}</span>
            <span className="text-2xl font-bold text-red-600">
              Rs. {totalPrice.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-medium">Quantity:</span>
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              +
            </button>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-red-900 text-white px-6 py-2 rounded hover:bg-gray-500"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-red-900 text-white px-6 py-2 rounded hover:bg-gray-500"
            >
              Buy it now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
