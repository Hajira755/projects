import React, { useEffect, useRef } from "react";

const FaceSerumsCarousel = () => {
  const trackRef = useRef(null);

  const products = [
    {
      img: "/img11.jpg",
      title: "Snail Skin Restoring Acne Control Face Serum 30ml",
      oldPrice: "Rs. 890.00",
      newPrice: "Rs. 757.00",
    },
    {
      img: "/img12.jpg",
      title: "Salicylic Acne Control Face Serum 30ml",
      oldPrice: "Rs. 890.00",
      newPrice: "Rs. 757.00",
    },
    {
      img: "/img13.jpg",
      title: "Glutathione Youthful Face Serum 30ml",
      oldPrice: "Rs. 890.00",
      newPrice: "Rs. 757.00",
    },
    {
      img: "/img14.jpg",
      title: "Vitamin A+ Anti-Freckle Complexion Serum 30ml",
      oldPrice: "Rs. 890.00",
      newPrice: "Rs. 587.00",
    },
    // Duplicate items for slider loop
    {
      img: "/img13.jpg",
      title: "Glutathione Youthful Face Serum 30ml",
      oldPrice: "Rs. 890.00",
      newPrice: "Rs. 757.00",
    },
    {
      img: "/img13.jpg",
      title: "Glutathione Youthful Face Serum 30ml",
      oldPrice: "Rs. 890.00",
      newPrice: "Rs. 757.00",
    },
    {
      img: "/img13.jpg",
      title: "Glutathione Youthful Face Serum 30ml",
      oldPrice: "Rs. 890.00",
      newPrice: "Rs. 757.00",
    },
    {
      img: "/img13.jpg",
      title: "Glutathione Youthful Face Serum 30ml",
      oldPrice: "Rs. 890.00",
      newPrice: "Rs. 757.00",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (trackRef.current) {
        const scrollAmount = trackRef.current.offsetWidth / 4;
        if (
          trackRef.current.scrollLeft + trackRef.current.offsetWidth >=
          trackRef.current.scrollWidth
        ) {
          trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Face Serums</h1>
      <div className="relative">
        <div
          ref={trackRef}
          className="flex overflow-x-scroll scroll-snap-x snap-mandatory"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="carousel-item snap-start flex-shrink-0 w-1/4 p-4"
            >
              <div className="bg-white rounded-lg shadow p-4">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    15% OFF
                  </span>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
                <h5 className="text-lg font-semibold mt-2">{product.title}</h5>
                <p className="text-gray-500 line-through">{product.oldPrice}</p>
                <p className="text-red-500 font-bold">{product.newPrice}</p>
                <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaceSerumsCarousel;
