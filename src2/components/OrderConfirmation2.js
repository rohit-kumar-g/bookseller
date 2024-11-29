import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract data passed via state from the previous page
  const { name, address, dateTime, totalAmount } = location.state || {};

  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h2>Thank You, {name || "Customer"}!</h2>
      <p>For placing your order with Citi Books.</p>
      <h4>Your order will be delivered at:</h4>
      <p style={{ fontWeight: "bold" }}>{address || "Not provided"}</p>
      <h4>At:</h4>
      <p style={{ fontWeight: "bold" }}>{dateTime || "Scheduled delivery time"}</p>
      <h4>Amount Payable Is:</h4>
      <p style={{ fontWeight: "bold" }}>₹{totalAmount || "0.00"}</p>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default OrderConfirmation;
