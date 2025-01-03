import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from "./firebaseConfig.jsx";
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
import CartPage from './Screencart/Cart.jsx';
import SplashScreen from './ScreenSplash/splash.jsx';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in on app load
    auth.onAuthStateChanged(setUser);
  }, []);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (

    <Router>
      {/* <MobileSideNav user={user} /> */}
      {user && <BottomNav />}

      {showSplash ? (
        <SplashScreen />
      ) : (

      <Routes>

        <Route path="/checkout" element=
          {user ? <CheckoutPage user={user} /> : <Navigate to="/login" />}>
        </Route>

        <Route path="/success" element={
          <SuccessPage />}>
        </Route>

        {/* <Route path="/login" element={<PremiumSignIn />}/> */}
        <Route path="/splash" element={<SplashScreen />}/>
        <Route path="/login" element={!user ? <><PremiumSignIn /></>: <Navigate to = "/home"/> } />



        <Route path="/" element={ <Navigate to = "/home"/> } />
        <Route path="/home" element={user ? <><HomePage /></>: <Navigate to = "/login"/> } />
        <Route path="/cart" element={user ? <><CartPage /></>: <Navigate to = "/login"/> } />
        <Route path="/profile" element={user ? <><HomePage /><MobileSideNav  user={user}/></>: <Navigate to = "/login"/> } />
        <Route path="/classes/:schoolId" element={user ? <ClassesPage />: <Navigate to = "/login"/> } />
        <Route path="/books/:schoolId/:classId" element={user ? <BooksPage />: <Navigate to = "/login"/> } />
    
      </Routes>
       )}
    </Router>
  );
};

export default App;
