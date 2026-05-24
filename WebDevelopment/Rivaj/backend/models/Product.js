const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  img: String,
  hoverImg: String,
  oldPrice: String,
  newPrice: { type: String, required: true },
  discount: String,
});

module.exports = mongoose.model("Product", productSchema);
