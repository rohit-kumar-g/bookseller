import React, { useState, useEffect, useRef } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Adjust the import to your Firebase config
import logo from '../logo2.png';
import '../css/stylesHome.css'; // Include your CSS

function MobileSideNav({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setShowPopup(true); // Show the popup
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    // Optionally redirect to login or home page here
  };
  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false); // Close menu on outside click
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);
  return (
    <div className="mobile-side-nav">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <img src={logo} alt="Logo" className="logo" />
          <p>Hi, {user?.email || 'Guest'}</p>
        </div>
        <button className="signout-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Signed out successfully!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileSideNav;
