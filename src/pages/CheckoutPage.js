import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function CheckoutPage() {
  const { state: cart } = useLocation();
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handlePay = async () => {
    await addDoc(collection(db, 'orders'), { ...cart, address });
    navigate('/success', { state: { ...cart, address } });
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p>Total: ${cart.total}</p>
      <textarea placeholder="Enter delivery address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={handlePay}>Pay</button>
    </div>
  );
}

export default CheckoutPage;
