import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import RivajHd from './pages/RivajHd'
import Makeup from './pages/MakeUp';
import SkinCare from './pages/SkinCare';
import HairCare from './pages/HairCare';
import Fragrances from './pages/Fragrances';
import Accessories from './pages/Accessories'
import AddToCart from "./pages/AddToCart";
import CheckOut from './pages/CheckOut';
import AdminDashboard from "./pages/AdminDashboard";
import EditProduct from "./pages/EditProduct"
import AddProduct from "./pages/AddProduct"



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sales" element={<Home category="Sales" />} />
        <Route path="/RivajHd" element={<RivajHd />} />
        <Route path="/MakeUp" element={<Makeup />} />
        <Route path="/SkinCare" element={<SkinCare />} />
        <Route path="/HairCare" element={<HairCare />} />
        <Route path="/Fragrances" element={<Fragrances />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/AddToCart" element={<AddToCart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/add-product" element={<AddProduct />} />
        
      </Routes>
    </Router>
  );
};

export default App;
