import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const CartSummary = ({ books, user, onPaymentSuccess }) => {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!address) {
      alert("Please provide a delivery address.");
      return;
    }

    try {
      const totalAmount = books.reduce((sum, book) => sum + book.price, 0);

      // Save order to Firestore
      const docRef = await addDoc(collection(db, "orders"), {
        userId: user.uid,
        name: user.displayName,
        address,
        items: books,
        totalAmount,
        orderDateTime: new Date().toLocaleString(),
      });

      // Pass order details to the confirmation page
      onPaymentSuccess({
        name: user.displayName,
        address,
        dateTime: new Date().toLocaleString(),
        totalAmount,
      });

      // Navigate to order confirmation
      navigate("/order-confirmation");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div>
      <h3>Cart Summary</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.name} - ₹{book.price}
          </li>
        ))}
      </ul>
      <h4>Total Amount: ₹{books.reduce((sum, book) => sum + book.price, 0)}</h4>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your delivery address"
        style={{ width: "100%", height: "100px", marginBottom: "20px" }}
      />
      <button
        onClick={handlePayment}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Pay Now
      </button>
    </div>
  );
};

export default CartSummary;
