import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams(); // get product ID from URL
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    img: "",
    hoverImg: "",
    oldPrice: "",
    newPrice: "",
    discount: "",
  });

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch product", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, product);
      alert("✅ Product updated successfully");
      navigate("/admin-dashboard");
    } catch (err) {
      console.error("❌ Failed to update product", err);
      alert("Failed to update product");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={product.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={product.img}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="hoverImg"
          placeholder="Hover Image URL"
          value={product.hoverImg}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="oldPrice"
          placeholder="Old Price"
          value={product.oldPrice}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="newPrice"
          placeholder="New Price"
          value={product.newPrice}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="discount"
          placeholder="Discount"
          value={product.discount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
