import React, { useState} from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Adjust the import to your Firebase config
import logo from '../logo2.png';
import '../css/stylesHome.css'; // Include your CSS

function MobileSideNav({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [startX, setStartX] = useState(0);

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    if (startX - touchX > 50) {
      // Swipe left
      setIsOpen(false);
    } else if (touchX - startX > 50) {
      // Swipe right
      setIsOpen(true);
    }
  };

  return (
    <div
      className="mobile-side-nav"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

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
