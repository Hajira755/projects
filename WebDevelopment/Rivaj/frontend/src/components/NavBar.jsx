import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const mobileLinks = [
    { label: 'RivajHd', to: '/RivajHd' },
    { label: 'Makeup', to: '/MakeUp' },
    { label: 'Skin Care', to: '/SkinCare' },
    { label: 'Hair Care', to: '/HairCare' },
    { label: 'Fragrances', to: '/Fragrances' },
    { label: 'Accessories', to: '/Accessories' },
  ];

  return (
    <>
      {/* Single Row Navbar */}
      <nav className="bg-red-900 text-white px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul className="hidden lg:flex space-x-6 text-sm">
            {[
              { label: 'Sales', to: '/' },
              {
                label: 'RivajHd',
                to: '/RivajHd',
                mega: true,
                categories: {
                  FACE: [
                    ['Primer', '/RivajHd'],
                    ['Foundation', '/RivajHd'],
                    ['Makeup Remover', '/RivajHd'],
                    ['Powder', '/RivajHd'],
                    ['Contour', '/RivajHd'],
                    ['Concealer', '/RivajHd'],
                    ['Makeup Brush', '/RivajHd'],
                    ['Accessories', '/RivajHd'],
                  ],
                  EYES: [
                    ['Eye Lashes', '/RivajHd'],
                    ['Eye Shadow', '/RivajHd'],
                    ['Mascara', '/RivajHd'],
                    ['Eye Liner', '/RivajHd'],
                    ['Makeup Remover', '/RivajHd'],
                  ],
                  LIPS: [
                    ['Lipstick', '/RivajHd'],
                    ['Lip Gloss', '/RivajHd'],
                    ['Makeup Remover', '/RivajHd'],
                  ],
                },
              },
              {
                label: 'MakeUp',
                to: '/MakeUp',
                mega: true,
                categories: {
                  FACE: [
                    ['Primer', '/RivajHd'],
                    ['Foundation', '/RivajHd'],
                    ['Makeup Remover', '/RivajHd'],
                    ['Powder', '/RivajHd'],
                    ['Contour', '/RivajHd'],
                    ['Concealer', '/RivajHd'],
                    ['Makeup Brush', '/RivajHd'],
                    ['Accessories', '/RivajHd'],
                  ],
                  EYES: [
                    ['Eye Lashes', '/RivajHd'],
                    ['Eye Shadow', '/RivajHd'],
                    ['Mascara', '/RivajHd'],
                    ['Eye Liner', '/RivajHd'],
                    ['Makeup Remover', '/RivajHd'],
                  ],
                  LIPS: [
                    ['Lipstick', '/RivajHd'],
                    ['Lip Gloss', '/RivajHd'],
                    ['Makeup Remover', '/RivajHd'],
                  ],
                },
              },
              {
                label: 'Skin Care',
                to: '/SkinCare',
                list: ['Face Serum', 'Sunblock', 'Cleanser','Face Wash','Face Mask','Face Serums','Beauty Soaps'],
              },
              {
                label: 'Hair Care',
                to: '/HairCare',
                list: ['Shampoo', 'Conditioner','Hair Oil','Hair Spray','HairColor'],
              },
              {
                label: 'Fragrances',
                to: '/Fragrances',
                list: ['Men Frragrances','Women Fragrances','Perfume', 'Deodorant'],
              },
              {
                label: 'Accessories',
                to: '/Accessories',
                list: ['Brushes', 'Blenders','Nail Accessories','Face Accessories','Hair Accessories'],
              },
            ].map((item, idx) => (
              <li key={idx} className="relative group">
                <Link to={item.to} className="hover:text-pink-400">
                  {item.label}
                </Link>
                {item.mega && (
                  <div className="absolute w-[800px] left-0 top-full hidden group-hover:flex bg-white text-black shadow-lg p-8 space-x-12 z-50">
                    {Object.entries(item.categories).map(([cat, links], i) => (
                      <div key={i}>
                        <h3 className="font-bold mb-2">{cat}</h3>
                        <ul className="space-y-1 text-sm">
                          {links.map(([text, link], j) => (
                            <li key={j}>
                              <Link to={link} className="hover:text-blue-500">
                                {text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {item.list && (
                  <ul className="absolute hidden group-hover:block bg-white text-black shadow-lg p-4 z-50 space-y-1 text-sm w-48">
                    {item.list.map((text, i) => (
                      <li key={i}>
                        <Link to={item.to} className="hover:text-blue-500">
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-gray-100 shadow-xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b relative">
          <h1 className="text-lg text-black font-semibold">Menu</h1>
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4"
          >
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="text-sm">
          {mobileLinks.map((item, idx) => (
            <li className="group border-b" key={idx}>
              <button
                className="w-full flex justify-between items-center px-4 py-3 hover:bg-pink-500 focus:outline-none submenu-toggle text-black bg-gray-100"
                onClick={() => toggleSubmenu(item.label)}
              >
                {item.label}
                <svg
                  className={`w-4 h-4 transform transition-transform ${openSubmenus[item.label] ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <ul
                className={`$${openSubmenus[item.label] ? 'block' : 'hidden'} pl-6 pb-2 text-gray-600`}
              >
                <li>
                  <Link to={item.to} className="hover:text-blue-500">
                    Go to {item.label}
                  </Link>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
