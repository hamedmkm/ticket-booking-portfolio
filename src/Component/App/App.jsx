import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Home from "../pages/Home";
import Dashboard from "../pages/Dahboard/Dashboard";
import Login from "../Auth/Login";
import TicketDetails from "../Tickets/TicketDetails";
import Cart from "../Cart/Cart";
import TicketList from "../Tickets/TicketList";

const App = () => {
  const [cartItems, setCartItems] = useState([]); // مدیریت آیتم‌های سبد خرید

  // تابع افزودن به سبد خرید
  const handleAddToCart = (ticket) => {
    setCartItems((prevItems) => [...prevItems, ticket]);
  };

  // تابع حذف آیتم از سبد خرید
  const handleRemoveItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* اضافه کردن لیست بلیط‌ها */}
            <Route 
              path="/" 
              element={<TicketList handleAddToCart={handleAddToCart} />} 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ticket/:id" element={<TicketDetails />} />
            {/* ارسال cartItems و handleRemoveItem به صفحه سبد خرید */}
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cartItems} 
                  handleRemoveItem={handleRemoveItem} 
                />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
