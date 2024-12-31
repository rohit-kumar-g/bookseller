import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function CheckoutPage({ user }) {
  const { state: cart } = useLocation();
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [trxid, setTrxid] = useState('');
  const [showPopup, setShowPopup] = useState(false); // For popup visibility
  const [errorMessage, setErrorMessage] = useState(''); // For error message

  const navigate = useNavigate();

  const handlePay = async () => {
    // Trim inputs and validate
    const trimmedAddress = address.trim();
    const trimmedPhone = phone.trim();
    const trimmedTrxid = trxid.trim();

    if (!trimmedAddress || !trimmedPhone || !trimmedTrxid) {
      setErrorMessage('Please fill out all fields.'); // Set error message
      setShowPopup(true); // Show popup
      return;
    }

    // Add order to Firestore
    await addDoc(collection(db, 'orders'), {
      ...cart,
      address: trimmedAddress,
      phone: trimmedPhone,
      trxid: trimmedTrxid,
      email: user.email,
      userId: user.uid,
    });

    navigate('/success', { state: { ...cart, address: trimmedAddress } });
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p>Total: <span>${cart.total}</span></p>
      <textarea
        placeholder="Enter delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <textarea
        placeholder="Enter Mobile number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <textarea
        placeholder="Enter payment id / UTR no"
        value={trxid}
        onChange={(e) => setTrxid(e.target.value)}
        required
      />
      <button onClick={handlePay}>Paid & Submit</button>

      {/* Popup Component */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>{errorMessage}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
