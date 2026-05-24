const Order = require("../models/Order");

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { items, total, address } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in order" });
    }

    if (!total || !address) {
      return res.status(400).json({ message: "Total and address are required" });
    }

    const order = new Order({
      user: req.user._id,
      items,
      total,
      address,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: "Failed to create order" });
  }
};

// Get all orders placed by the logged-in user
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
  console.error("Create Order Error:", error);  // 👈 Add this
  res.status(500).json({ message: "Failed to create order" });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
};
