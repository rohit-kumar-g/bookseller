import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginRegister from "./components/LoginRegister";
import HomePage from "./components/HomePage";
import ClassSelection from "./components/ClassSelection";
import BookSelection from "./components/BookSelection";
import CartSummary from "./components/CartSummary";
import OrderConfirmation from "./components/OrderConfirmation";

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Login/Register Page */}
        <Route
          path="/"
          element={
            <LoginRegister
              onLogin={(userData) => {
                setUser(userData);
                setSelectedSchool(null);
                setSelectedClass(null);
                setSelectedBooks([]);
              }}
            />
          }
        />

        {/* Home Page - School Selection */}
        <Route
          path="/home"
          element={
            user ? (
              <HomePage
                onSchoolSelect={(school) => {
                  setSelectedSchool(school);
                  setSelectedClass(null);
                }}
              />
            ) : (
              <LoginRegister onLogin={setUser} />
            )
          }
        />

        {/* Class Selection Page */}
        <Route
          path="/class-selection"
          element={
            user && selectedSchool ? (
              <ClassSelection
                school={selectedSchool}
                onClassSelect={(classSelected) => setSelectedClass(classSelected)}
              />
            ) : (
              <HomePage onSchoolSelect={setSelectedSchool} />
            )
          }
        />

        {/* Book Selection Page */}
        <Route
          path="/book-selection"
          element={
            user && selectedSchool && selectedClass ? (
              <BookSelection
                school={selectedSchool}
                selectedClass={selectedClass}
                onOrder={(books) => setSelectedBooks(books)}
              />
            ) : (
              <ClassSelection
                school={selectedSchool}
                onClassSelect={setSelectedClass}
              />
            )
          }
        />

        {/* Cart Summary Page */}
        <Route
          path="/cart-summary"
          element={
            user && selectedBooks.length > 0 ? (
              <CartSummary
                books={selectedBooks}
                user={user}
                onPaymentSuccess={(details) => {
                  setOrderDetails(details); // Save order details for confirmation page
                  setSelectedBooks([]);
                  setSelectedSchool(null);
                  setSelectedClass(null);
                }}
              />
            ) : (
              <BookSelection
                school={selectedSchool}
                selectedClass={selectedClass}
                onOrder={setSelectedBooks}
              />
            )
          }
        />

        {/* Order Confirmation Page */}
        <Route
          path="/order-confirmation"
          element={
            orderDetails ? (
              <OrderConfirmation orderDetails={orderDetails} />
            ) : (
              <HomePage onSchoolSelect={setSelectedSchool} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
