import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {auth } from "./firebaseConfig";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import ClassesPage from './pages/ClassesPage';
import BooksPage from './pages/BooksPage';
import MobileSideNav from './pages/MobileSideNav'
import './css/styles.css';
import logo from './headerLogo.png';

import SuccessPage from './pages/SuccessPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in on app load
    auth.onAuthStateChanged(setUser);
  }, []);
  
  return (
    
    <Router>
            <MobileSideNav user={user} />

            <div className="headerLogo">
          <img src={logo} alt="Logo" className="headerLogoImg" />
        </div>
      <Routes>
        <Route exact path="/" element=
          {user ? <HomePage /> : <Navigate to="/login" />}>
        </Route>

        <Route path="/login" element= 
          {user ? <Navigate to="/" /> : <LoginPage />}>
        </Route>

        {/* <Route path="/home" element= 
          {<HomePage/>}>
        </Route> */}

        <Route path="/checkout"element=
          {user ? <CheckoutPage user={user} /> : <Navigate to="/login" />}>
        </Route>

        <Route path="/success" element={
          <SuccessPage />}>
        </Route>

        
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/classes/:schoolId" element={<ClassesPage />} />
        <Route path="/books/:schoolId/:classId" element={<BooksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
