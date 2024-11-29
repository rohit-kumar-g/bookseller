import React, { useState } from "react";
import { db } from "../firebaseConfig.mjs";
import { addDoc, collection } from "firebase/firestore";

const CartSummary = ({ books, user, onPaymentSuccess }) => {
  const [address, setAddress] = useState("");

  const handlePayment = async () => {
    const amount = books.reduce((sum, book) => sum + book.price, 0);

    const orderData = {
      userId: user.uid,
      books,
      address,
      amount,
      timestamp: new Date()
    };

    await addDoc(collection(db, "orders"), orderData);
    onPaymentSuccess();
  };

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Amount: ${books.reduce((sum, book) => sum + book.price, 0)}</p>
      <textarea
        placeholder="Enter Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default CartSummary;
