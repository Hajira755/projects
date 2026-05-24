import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import ProductCard from "../components/ProductCard";

const RivajHd = () => {
  const allProducts = [
    {
      category: "Palette",
      title: "Fantasy Contour Palette",
      img: "/pic11.jpg",
      hoverImg: "/pic12.jpg",
      oldPrice: "Rs.650.00",
      newPrice: "Rs.550.00",
      discount: "15% off",
    },
    {
      category: "LipStick",
      title: "Pure Matte Lipstick",
      img: "/pic21.jpg",
      hoverImg: "/pic22.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Foundation",
      title: "Foundation Paint Stick",
      img: "/pic31.jpg",
      hoverImg: "/pic32.jpg",
      oldPrice: "Rs.250.00",
      newPrice: "Rs.220.00",
      discount: "15% off",
    },
    {
      category: "Powder",
      title: "Rivaj Photoready SPF15",
      img: "/pic41.jpg",
      hoverImg: "/pic42.jpg",
      oldPrice: "Rs.250.00",
      newPrice: "Rs.220.00",
      discount: "15% off",
    },
    {
      category: "Brushes",
      title: "Makeup Brush",
      img: "/1p.jpg",
      hoverImg: "/11p.jpg",
      oldPrice: "Rs.250.00",
      newPrice: "Rs.220.00",
      discount: "15% off",
    },
    {
      category: "Powder",
      title: "Soft Velvet Powder",
      img: "/b.jpg",
      hoverImg: "/bb.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Foundation",
      title: "Rivaj Magical Dazzling",
      img: "/2p.jpg",
      hoverImg: "/22p.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Palette",
      title: "Pressed sparkle Palette",
      img: "/3p.jpg",
      hoverImg: "/33p.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "Maskara",
      title: "Bold Lash super volume",
      img: "/4p.jpg",
      hoverImg: "/44p.jpg",
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

export default RivajHd;
