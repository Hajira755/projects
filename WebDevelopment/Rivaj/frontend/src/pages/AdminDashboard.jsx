import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch products", err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      // Remove from frontend list
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("❌ Failed to delete", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Product Dashboard</h2>
      <Link to="/add-product">
  <button className="bg-green-600 text-white px-4 py-1 rounded mb-4">
    Add New Product
  </button>
</Link>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="p-2 border">
                <img src={product.img} className="w-16 h-16 object-cover" />
              </td>
              <td className="p-2 border">{product.title}</td>
              <td className="p-2 border">{product.newPrice}</td>
              <td className="p-2 border">
                <Link to={`/edit/${product._id}`}>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
