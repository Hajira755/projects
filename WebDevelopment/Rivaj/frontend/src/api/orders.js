// src/api/orders.js
import axios from "axios";

// Create a new order (used in checkout)
export const createOrder = async (orderData, token) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/orders",
      orderData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Order creation failed:", error.response?.data || error.message);
    throw error;
  }
};

// Get all orders of logged-in user
export const getMyOrders = async (token) => {
  try {
    const response = await axios.get("http://localhost:5000/api/orders/myorders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Fetching orders failed:", error.response?.data || error.message);
    throw error;
  }
};
