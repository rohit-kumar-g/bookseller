import React, { useState } from "react";
import "./EnhancedBottomNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCartShopping,
  faCircleInfo,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const EnhancedBottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { id: "home", icon: faHouse, label: "Home" },
    { id: "cart", icon: faCartShopping, label: "Cart", badge: 4 },
    { id: "info", icon: faCircleInfo, label: "Info" },
    { id: "profile", icon: faUser, label: "Profile" },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <nav className={`enhanced-bottom-nav ${darkMode ? "dark" : ""}`}>
      <div className="nav-content">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            <div className="icon-container">
              <FontAwesomeIcon icon={item.icon} className="nav-icon" />
              {item.badge && <span className="badge">{item.badge}</span>}
            </div>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}

        {/* Floating Action Button */}
        <div
          className="floating-action-button"
          onClick={toggleDarkMode}
          title="Toggle Dark Mode"
        >
          <FontAwesomeIcon icon={faPlus} className="fab-icon" />
        </div>
      </div>
    </nav>
  );
};

export default EnhancedBottomNav;
