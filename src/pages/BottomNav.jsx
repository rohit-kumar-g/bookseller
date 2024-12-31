import React, { useState } from "react";
import "./BottomNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCartShopping,
  faCircleInfo,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", icon: faHouse, label: "Home" },
    { id: "cart", icon: faCartShopping, label: "Cart", badge: 3 },
    { id: "info", icon: faCircleInfo, label: "Info" },
    { id: "notifications", icon: faBell, label: "Notifications", badge: 5 },
    { id: "profile", icon: faUser, label: "Profile" },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    // Simulate vibration feedback (vibration is not fully supported on web)
    if ("vibrate" in navigator) navigator.vibrate(50);
    if(id == "profile"){
      
    }
  };

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`nav-item ${activeTab === item.id ? "active" : ""}`}
          onClick={() => handleNavClick(item.id)}
        >
          <div className="icon-container">
            <FontAwesomeIcon icon={item.icon} className="nav-icon" />
            {item.badge && <span className="badge">{item.badge}</span>}
          </div>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;
