import React from "react";

const Footer = () => {
  return (
    <>
      {/* Features Section Above Footer */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex justify-around items-center mb-8">
          <div className="text-center">
            <img
              src="/icon-2_copy.png"
              alt="Free Shipping"
              className="mx-auto mb-2"
            />
            <p className="font-semibold">Free Shipping</p>
          </div>
          <div className="text-center">
            <img
              src="/Easy_returns.jpg"
              alt="Easy Paisa"
              className="mx-auto mb-2"
            />
            <p className="font-semibold">Easy Paisa</p>
          </div>
          <div className="text-center">
            <img
              src="/Highly-rated.jpg"
              alt="Highly Rated"
              className="mx-auto mb-2"
            />
            <p className="font-semibold">Highly Rated</p>
          </div>
          <div className="text-center">
            <img
              src="/247_Customer_Care.jpg"
              alt="24/7 Customer Care"
              className="mx-auto mb-2"
            />
            <p className="font-semibold">24/7 Customer Care</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Section */}
            <div>
              <h3 className="font-semibold mb-4">
                <a href="contact_us.html">Contact Us</a>
              </h3>
              <p>Questions? We're here for you Monday - Saturday, 9am-6pm.</p>
              <p className="mt-2">
                <a href="tel:+923344975673" className="text-blue-500">
                  +92 334 4975673
                </a>
              </p>
              <p className="mt-2">
                <a href="mailto:care@rivaj-uk.com" className="text-blue-500">
                  care@rivaj-uk.com
                </a>
              </p>
              <p className="mt-2">
                183-S, Quaid E Azam Industrial Estate, Kot Lakhpat, Lahore,
                Pakistan.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/RivajOnlineOfficial">
                  <img className="w-6" src="/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/rivajcosmeticsonline/?igshid=MzRlODBiNWFlZA%3D%3D">
                  <img className="w-6" src="/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.tiktok.com/@rivajcosmetics">
                  <img className="w-6" src="/tiktok.png" alt="TikTok" />
                </a>
                <a href="https://www.youtube.com/channel/UCb6S4S0O_wCxurIlqTGg1vw">
                  <img className="w-6" src="/utube.png" alt="YouTube" />
                </a>
                <a href="https://www.linkedin.com/company/rivaj-uk/">
                  <img className="w-6" src="/linkedin.png" alt="LinkedIn" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Returns & Exchanges
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    FAQs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Refund Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="mailto:CAREER@RIVAJ"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    CAREER@RIVAJ
                  </a>
                </li>
              </ul>
            </div>

            {/* Info Links */}
            <div>
              <h3 className="font-semibold mb-4">Info</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Happy Customers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    New Arrivals
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    About RIVAJ
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Store Locator
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Shipping
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-blue-500">
                    Track Your Order
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p>Subscribe for store updates and discounts.</p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="border p-2 w-full mb-4"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-gray-600 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
