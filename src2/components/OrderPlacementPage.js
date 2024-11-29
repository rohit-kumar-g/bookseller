import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const OrderPlacementPage = ({ userName, selectedBooks, totalCartAmount }) => {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const navigate = useNavigate();

  const placeOrder = async () => {
    try {
      if (!deliveryAddress) {
        alert("Please enter a delivery address!");
        return;
      }

      // Add order to Firestore
      await addDoc(collection(db, "orders"), {
        name: userName,
        address: deliveryAddress,
        dateTime: new Date().toLocaleString(),
        totalAmount: totalCartAmount,
        items: selectedBooks,
      });

      // Navigate to Order Confirmation Page with details
      navigate("/order-confirmation", {
        state: {
          name: userName,
          address: deliveryAddress,
          dateTime: new Date().toLocaleString(),
          totalAmount: totalCartAmount,
        },
      });
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div>
      <h3>Delivery Address</h3>
      <textarea
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
        placeholder="Enter your delivery address"
        style={{ width: "100%", height: "100px", marginBottom: "20px" }}
      />
      <h4>Total Amount: ₹{totalCartAmount}</h4>
      <button
        onClick={placeOrder}
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

export default OrderPlacementPage;
