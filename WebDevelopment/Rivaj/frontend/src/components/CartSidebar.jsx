import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartSidebar = ({ isVisible, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    calculateTotal,
    shippingFee,
    grandTotal,
  } = useContext(CartContext);

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 transition-transform duration-300 transform ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="text-gray-500 absolute top-4 right-4 text-xl"
      >
        &times;
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">Your cart</h2>

      {/* If Cart is Empty */}
      {cartItems.length === 0 ? (
        <div>
          <p className="text-gray-500 text-sm">Your cart is empty</p>
          <button
            onClick={onClose}
            className="w-full bg-red-900 text-white py-2 mt-4 rounded-md hover:bg-red-800"
          >
            Continue shopping
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b pb-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-red-600 font-bold">{item.newPrice}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="mt-4 border-t pt-4 text-sm">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>Rs. {calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Rs. {shippingFee}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>Rs. {grandTotal.toFixed(2)}</span>
            </div>

            <Link to="/checkout">
              <button
                onClick={onClose}
                className="w-full bg-purple-700 text-white py-2 mt-4 rounded hover:bg-purple-800"
              >
                Go to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
