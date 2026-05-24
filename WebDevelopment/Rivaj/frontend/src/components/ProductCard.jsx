import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  img,
  hoverImg,
  title,
  oldPrice,
  newPrice,
  discount,
  _id, // optional: use product ID if needed later
}) => {
  const productData = {
    _id,
    img,
    hoverImg,
    title,
    oldPrice,
    newPrice,
    discount,
    quantity: 1, // default quantity to 1 when first added
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
            {discount}
          </span>
        )}
        {/* Main Image */}
        <img
          src={img}
          alt={title}
          className="w-full transition-opacity duration-300 hover:opacity-0"
        />
        {/* Hover Image */}
        <img
          src={hoverImg}
          alt={`${title} Hover`}
          className="w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
        />
      </div>

      {/* Product Info */}
      <h5 className="text-lg font-semibold mt-2">{title}</h5>
      {oldPrice && <p className="text-gray-500 line-through">{oldPrice}</p>}
      <p className="text-red-500 font-bold">{newPrice}</p>

      {/* Link to Add to Cart Page */}
      <Link
        to="/AddToCart"
        state={productData}
        className="block"
      >
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-3 w-full hover:bg-gray-500 transition">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
