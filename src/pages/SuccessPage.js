import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SuccessPage() {
  const { state: order } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <h1>Order Successful</h1>
      <p>Delivery Address: {order.address}</p>
      <ul>
        {order.books.map((book) => (
          <li key={book.id}>
            {book.name} - ${book.price}
          </li>
        ))}
      </ul>
      <p>Total: ${order.total}</p>
      <button onClick={() => navigate('/home')}>Back to Home</button>
    </div>
  );
}

export default SuccessPage;
