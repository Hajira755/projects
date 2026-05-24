import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import ProductCard from "../components/ProductCard";

const SkinCare = () => {
  const allProducts = [
    {
      category: "Mask",
      title: "Oatmeal Facial Mask 400ml",
      img: "/s1.jpg",
      hoverImg: "/s2.jpg",
      oldPrice: "Rs.3015.00",
      newPrice: "Rs.2563.00",
      discount: "15% off",
    },
    {
      category: "Lotion",
      title: "Cocoa Butter Lotion",
      img: "/s11.jpg",
      hoverImg: "/s22.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Gel",
      title: "Rose Skin Gel 100ml",
      img: "/s111.jpg",
      hoverImg: "/s222.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Serum",
      title: "Skin Restoring Face Serum",
      img: "/img11.jpg",
      hoverImg: "/img12.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Serum",
      title: "Salicylic Acid Face Serum",
      img: "/img13.jpg",
      hoverImg: "/img14.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "SunBlock",
      title: "Vitamin C Face Wash 200ml",
      img: "/s21.jpg",
      hoverImg: "/s12.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "FaceWash",
      title: "Neem Whitening Face Wash",
      img: "/s13.jpg",
      hoverImg: "/s14.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Soap",
      title: "Neem Soap 100g",
      img: "/s15.jpg",
      hoverImg: "/s16.jpg",
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
    <Footer />
    </div>
  );
};

export default SkinCare;
