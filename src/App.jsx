import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {auth } from "./firebaseConfig.jsx";
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import ClassesPage from './pages/ClassesPage.jsx';
import BooksPage from './pages/BooksPage.jsx';
import MobileSideNav from './pages/MobileSideNav.jsx'
import './css/styles.css';
import logo from './headerLogo.png';

import SuccessPage from './pages/SuccessPage.jsx';
import BottomNav from './pages/BottomNav.jsx';
import { Home } from './hmpage/Home/Home.jsx';
import PremiumSignIn from './ScreenLogin/Loginpg1.jsx';

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
        <Route  exact path="/" element=
          {user ? <HomePage /> : <Navigate to="/login" />}>
        </Route>

        <Route path="/login" element= 
          {user ? <Navigate to="/" /> : <PremiumSignIn />}>
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

        
        <Route path="/" element={<PremiumSignIn />} />
        <Route path="/home" element={<><BottomNav/><HomePage /></>} />
        <Route path="/classes/:schoolId" element={<ClassesPage />} />
        <Route path="/books/:schoolId/:classId" element={<BooksPage />} />
        <Route path='/test'element ={<>
        <Home />

        </>}/>
      </Routes>
    </Router>
  );
};

export default App;
