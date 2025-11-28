import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Placeorder from "./Pages/PlaceOrder/Placeorder";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/loginPopup/LoginPopup";
import Verify from "./Pages/Verify/Verify";
import Myorders from "./Pages/Myorders/Myorders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<Myorders />} />
        </Routes>
        <Routes />
      </div>
      <Footer />
    </>
  );
};

export default App;
