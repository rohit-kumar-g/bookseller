import React, { useState } from "react";
import LoginRegister from "./components/LoginRegister";
import HomePage from "./components/HomePage";
import ClassSelection from "./components/ClassSelection";
import BookSelection from "./components/BookSelection";
import CartSummary from "./components/CartSummary2";
import OrderConfirmation from "./components/OrderConfirmation2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Inside your Routes
<Route path="/order-confirmation" element={<OrderConfirmation />} />

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState([]);

  return (
    <div>
      {!user ? (
        <LoginRegister onLogin={setUser} />
      ) : !selectedSchool ? (
        <HomePage onSchoolSelect={setSelectedSchool} />
      ) : !selectedClass ? (
        <ClassSelection school={selectedSchool} onClassSelect={setSelectedClass} />
      ) : selectedBooks.length === 0 ? (
        <BookSelection
          school={selectedSchool}
          selectedClass={selectedClass}
          onOrder={setSelectedBooks}
        />
      ) : (
        <CartSummary books={selectedBooks} user={user} onPaymentSuccess={() => setSelectedBooks([])} />
      )}
    </div>
  );
};

export default App;
