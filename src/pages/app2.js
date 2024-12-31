import React, { useState } from "react";
import "./app2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faInfoCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import BottomNav from "./BottomNav";
import EnhancedBottomNav from "./EnhancedBottomNav";

const App2 = () => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h2>HOT SELLING</h2>
        <h2>ALL ITEMS</h2>
      </header>

      {/* Product Carousel */}
      <div className="carousel">
        <img src="scissors.jpg" alt="Scissors" className="carousel-image" />
        <div className="product-info">
          <p>Rp. 20.000</p>
        </div>
      </div>

      {/* Product List */}
      <div className="product-list">
        <div className="product-item">
          <img src="kitty-holders.jpg" alt="Kitty Holders" />
          <div>
            <p>Kitty Stationery Holders</p>
            <p>Rp. 8.000</p>
          </div>
        </div>
        <div className="product-item">
          <img src="masking-tape.jpg" alt="Masking Tape" />
          <div>
            <p>Ocean Masking Tape</p>
            <p>Rp. 12.000</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div>
      {/* <EnhancedBottomNav /> */}
      <BottomNav />
    </div>
    </div>
  );
};

export default App2;
