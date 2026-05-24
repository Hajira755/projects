import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Home = () => {
  const [hdProducts, setHdProducts] = useState([]);

  const carouselImages = ["img1.jpg", "img2.jpg", "img3.jpg", "imgg1.jpg"];

  const faceSerums = [
    {
      img: "/im2.jpg",
      hoverImg: "/im2.jpg",
      title: "Snail Skin Restoring Face Serum",
      oldPrice: "Rs.890.00",
      newPrice: "Rs.757.00",
      discount: "15% off",
    },
    {
      img: "/im4.jpg",
      hoverImg: "/im4.jpg",
      title: "Rivaj Vitamin A+ Face Serum",
      oldPrice: "Rs.890.00",
      newPrice: "Rs.757.00",
      discount: "15% off",
    },
    {
      img: "/im5.jpg",
      hoverImg: "/im5.jpg",
      title: "Mandelic Acid 10% Face Serum",
      oldPrice: "Rs.890.00",
      newPrice: "Rs.757.00",
      discount: "15% off",
    },
    {
      img: "/im6.jpg",
      hoverImg: "/im6.jpg",
      title: "Retinol 0.5% Anti Face Serum",
      oldPrice: "Rs.890.00",
      newPrice: "Rs.757.00",
      discount: "15% off",
    },
  ];

  useEffect(() => {
    const fetchHDProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setHdProducts(res.data);
      } catch (error) {
        console.error("Error fetching HD products", error);
      }
    };
    fetchHDProducts();
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <ImageCarousel images={carouselImages} />

      <h2 className="text-3xl font-bold text-center my-8 border-b-2 border-black px-4">
        Face Serums
      </h2>
      <div className="container mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {faceSerums.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[500px] mt-10">
        <a href="makeup.html">
          <img
            src="/rivaj.jpg"
            alt="Rivaj HD Makeup"
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      <h2 className="text-3xl font-bold text-center my-8 border-b-2 border-black px-4">
        Rivaj HD
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {hdProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6 mt-12">
        <div className="md:w-1/2 text-center md:text-left p-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            FRAGRANCES FOR MEN & WOMEN
          </h3>
          <p className="text-gray-700 mb-6">
            A journey of confidence and refinement: Immerse yourself in our
            men's and women Fragrance World.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="fragrances.html">
              <button className="bg-red-900 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                FOR MEN
              </button>
              <button className="bg-red-900 text-white px-6 py-2 rounded hover:bg-red-700 transition ml-2">
                FOR WOMEN
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 relative overflow-hidden transform transition rounded-lg shadow-lg">
          <a href="fragrances.html">
            <img
              src="/frag.jpg"
              alt="Fragrance Background"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {faceSerums.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
            <a
              href="face-serum.html"
              className="block transform transition-transform duration-700 group-hover:scale-105"
            >
              <img
                src="/serum.jpg"
                alt="Vitamin C Serum"
                className="w-full h-full object-cover rounded-lg"
              />
            </a>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6">
              <h5 className="text-white text-2xl font-bold mb-2">
                Vitamin C Serum
              </h5>
              <p className="text-white text-lg opacity-90">
                For radiant and youthful skin
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
