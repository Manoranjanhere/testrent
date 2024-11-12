import React from "react";
import Header from "../common/header/Header";
import Login from "../common/header/Login";
import Register from "../common/header/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Recent from "../home/recent/Recent";
import Checkout from "../home/recent/Checkout";
import CartPage from "../home/cart/CartPage";
import PaymentPage from "../home/cart/PaymentPage";
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/recent/:roomCategory" element={<Recent />} />{" "}
          {/* New route for Recent */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
