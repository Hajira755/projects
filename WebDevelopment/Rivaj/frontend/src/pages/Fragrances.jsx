import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";

const Fragrances = () => {
  const carouselImages = ["f.jpg", "ff.png", "fff.png", "fff.png"];

  const allProducts = [
    {
      category: "For Men",
      title: "Oud Majesty Unisex Perfume",
      img: "/f1.jpg",
      hoverImg: "/f11.jpg",
      oldPrice: "Rs.3015.00",
      newPrice: "Rs.2563.00",
      discount: "15% off",
    },
    {
      category: "For Women",
      title: "Wild Flower Women Perfume",
      img: "/f2.jpg",
      hoverImg: "/f22.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "For Women",
      title: "Night Shade Women Perfume",
      img: "/f3.jpg",
      hoverImg: "/f33.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
    {
      category: "For Men",
      title: "Wild West Men Perfume 75ml",
      img: "/f4.jpg",
      hoverImg: "/f44.jpg",
      oldPrice: "Rs.2505.00",
      newPrice: "Rs.2200.00",
      discount: "15% off",
    },
  ];

  return (
    <div>
      <Header />
      <NavBar />
      <ImageCarousel images={carouselImages} />

      <div className="p-4">
        {/* Featured Products Title */}
        <h2 className="text-2xl font-bold mb-4 text-center uppercase tracking-widest">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {allProducts.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fragrances;
