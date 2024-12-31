import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import arrowBack from "./arrow-back.svg";
import removeRedEye from "./remove-red-eye.svg";

import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #007aff, #5ac8fa);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
`;

const Header = styled.header`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Branding = styled.div`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const FormCard = styled.div`
  width: 90%;
  max-width: 400px;
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const InputIcon = styled.img`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  opacity: 0.7;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #007aff;
  }
`;

const PasswordToggle = styled.img`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #007aff, #5ac8fa);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 122, 255, 0.3);
  transition: transform 0.2s;

  &:hover {
    background: linear-gradient(135deg, #005bb5, #4aa3e6);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Link = styled.a`
  display: block;
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
  color: #007aff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RegisterLink = styled.p`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  color: #555;

  a {
    color: #007aff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PremiumSignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <Header>
        <BackIcon src={arrowBack} alt="Back" />
        <Branding>CityBooks</Branding>
      </Header>

      <FormCard>
        <Title>Get Started</Title>
        <Subtitle>Please fill in your details to login.</Subtitle>
        <InputGroup>
          <InputIcon src="https://img.icons8.com/ios-filled/50/000000/mail.png" alt="Email Icon" />
          <Input type="email" placeholder="Username/email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <InputIcon src="https://img.icons8.com/ios-filled/50/000000/lock.png" alt="Password Icon" />
          <Input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} 
          />
          <PasswordToggle
            src={removeRedEye}
            alt="Toggle Password"
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        </InputGroup>
        <Button type="button"  onClick={handleAuth} >Get Started</Button>
        <Link href="/forgot-password">Forgot password?</Link>
      </FormCard>

      <RegisterLink>
        New member? <a href="/register">Register</a>
      </RegisterLink>
    </Container>
  );
};

export default PremiumSignIn;
