import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../api/orders"; // go back one level
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, totalAmount } = useContext(CartContext);

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!/^[a-zA-Z]+$/.test(form.firstName)) {
      newErrors.firstName = "Only letters are allowed";
    }
    if (!/^[a-zA-Z]+$/.test(form.lastName)) {
      newErrors.lastName = "Only letters are allowed";
    }
    if (!form.address) {
      newErrors.address = "Address is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const orderData = {
      items: cartItems.map((item) => ({
        productId: item._id,
        quantity: item.quantity,
      })),
      total: totalAmount,
      address: form.address,
    };

    try {
      const token = localStorage.getItem("token");
      const createdOrder = await createOrder(orderData, token);
      console.log("✅ Order placed:", createdOrder);
      alert("Order placed successfully!");
      navigate("/");
    } catch (error) {
      console.error("❌ Order failed", error);
      alert("Failed to place order.");
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Contact</h3>
            <input
              type="text"
              placeholder="Email"
              className={`w-full border p-2 rounded ${errors.email ? "border-red-500" : ""}`}
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Delivery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  className={`border p-2 rounded w-full ${errors.firstName ? "border-red-500" : ""}`}
                  value={form.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
                {errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  className={`border p-2 rounded w-full ${errors.lastName ? "border-red-500" : ""}`}
                  value={form.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
                {errors.lastName && <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>}
              </div>
              <input
                type="text"
                placeholder="Address"
                className={`border p-2 rounded col-span-2 ${errors.address ? "border-red-500" : ""}`}
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                className="border p-2 rounded"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="border p-2 rounded"
                value={form.postalCode}
                onChange={(e) => handleChange("postalCode", e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Shipping Method</h3>
            <label className="block border p-2 rounded">
              <input type="radio" name="shipping" className="mr-2" defaultChecked />
              Standard - Rs.199
            </label>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Payment</h3>
            <label className="block border p-2 rounded mb-2">
              <input type="radio" name="payment" className="mr-2" defaultChecked />
              PayFast (Debit/Credit/Wallet)
            </label>
            <label className="block border p-2 rounded">
              <input type="radio" name="payment" className="mr-2" />
              Cash on Delivery
            </label>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>Rs. {totalAmount - 199}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping:</span>
              <span>Rs. 199.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total:</span>
              <span>Rs. {totalAmount}</span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
