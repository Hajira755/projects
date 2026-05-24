import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import ProductCard from "../components/ProductCard";

const HajirCare = () => {
  const allProducts = [
    {
      category: "Concealer",
      title: "Poreless Mattifying Primer",
      img: "/a.jpg",
      hoverImg: "/aa.jpg",
      oldPrice: "Rs.3015.00",
      newPrice: "Rs.2563.00",
      discount: "15% off",
    },
    {
      category: "Foundation",
      title: "Soft Velvet Powder",
      img: "/b.jpg",
      hoverImg: "/bb.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Foundation",
      title: "Soft Velvet Powder",
      img: "/b.jpg",
      hoverImg: "/bb.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Foundation",
      title: "Soft Velvet Powder",
      img: "/b.jpg",
      hoverImg: "/bb.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Foundation",
      title: "Soft Velvet Powder",
      img: "/b.jpg",
      hoverImg: "/bb.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Foundation",
      title: "Soft Velvet Powder",
      img: "/b.jpg",
      hoverImg: "/bb.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Foundation",
      title: "Soft Velvet Powder",
      img: "/b.jpg",
      hoverImg: "/bb.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Foundation",
      title: "Soft Velvet Powder",
      img: "/b.jpg",
      hoverImg: "/bb.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const uniqueCategories = [
    ...new Set(allProducts.map((p) => p.category)),
  ].map((name) => ({
    name,
    count: allProducts.filter((p) => p.category === name).length,
  }));

  const handleFilterChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (type, value) => {
    setPriceRange((prev) => ({ ...prev, [type]: value }));
  };

  const filteredProducts = allProducts.filter((p) => {
    const matchCategory =
      selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const price = parseFloat(p.newPrice.replace(/[^0-9.]/g, ""));
    const matchPrice =
      (!priceRange.min || price >= parseFloat(priceRange.min)) &&
      (!priceRange.max || price <= parseFloat(priceRange.max));
    return matchCategory && matchPrice;
  });

  return (
    <div >
      <Header />
      <NavBar />
      <div className="flex">
      <ProductFilterSidebar
        filters={uniqueCategories}
        priceRange={priceRange}
        selectedFilters={selectedCategories}
        onFilterChange={handleFilterChange}
        onPriceChange={handlePriceChange}
      />

      <div className="w-full md:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default HajirCare;
