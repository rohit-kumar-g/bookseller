import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Adjust the import to your Firebase config
import logo from "../logo2.png";

const Container = styled.div`
  position: relative;
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
  }
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  width: 300px;
  height: 100%;
  background: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transition: left 0.3s ease-in-out;
  z-index: 10;
`;

const MenuHeader = styled.div`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
`;

const Greeting = styled.p`
  font-size: 16px;
  color: #333;
`;

const SignOutButton = styled.button`
  margin: 20px auto;
  display: block;
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #d32f2f;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 8px;
  z-index: 1001;
  text-align: center;

  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #45a049;
    }
  }
`;

function MobileSideNav({ user }) {
  const navigate = useNavigate();
  // const { isOpen, setIsOpen, showPopup, setShowPopup } = usePopupState();
  
  const [isOpen, setIsOpen] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {

    console.log("isOpen updated:", isOpen);

  }, [isOpen]);

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
    // setIsOpen(false);
    navigate("/");

  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    if (startX - touchX > 50) {
      // Swipe left
      // setIsOpen(false);
      navigate("/");

    } else if (touchX - startX > 50) {
      // Swipe right
      // setIsOpen(true);
      navigate("/profile");

    }
  };
  return (
    <Container isOpen={isOpen} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      {isOpen && <div className="overlay" onClick={closeMenu} />}
      <SideMenu isOpen={isOpen}>
        <MenuHeader>
          <Logo src={logo} alt="Logo" />
          <Greeting>Hi, {user?.email || "Guest"}</Greeting>
        </MenuHeader>
        <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
      </SideMenu>

      {showPopup && (
        <Popup>
          <p>Signed out successfully!</p>
          <button onClick={closePopup}>Close</button>
        </Popup>
      )}
    </Container>
  );
}

export default MobileSideNav;
