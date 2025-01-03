import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '/nobglogo.png';
    
// Keyframes for logo animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const Logo = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #4a90e2, #50e3c2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-out, ${bounce} 2s infinite;
`;

const LogoText = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
`;

const Tagline = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #6c757d;
  font-family: 'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 14px;
  color: #adb5bd;
`;
const LogoImg = styled.img`
  width: 50px;
  height: auto;

`;

const SplashScreen = () => {
  return (
    <Container>
      <Logo>
        <LogoText>
        <LogoImg src={logo} alt="Logo"/>
        </LogoText>
      </Logo>
      <Tagline>Experience the Future</Tagline>
      <Footer>&copy; 2025 CityBooks Inc.</Footer>
    </Container>
  );
};

export default SplashScreen;
