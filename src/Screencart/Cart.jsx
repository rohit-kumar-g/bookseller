
import React, { useState } from 'react';
import styled from 'styled-components';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Book 1', price: 250, quantity: 2, outOfStock: false, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Book 2', price: 150, quantity: 1, outOfStock: true, image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Book 3', price: 300, quantity: 1, outOfStock: false, image: 'https://via.placeholder.com/100' },
    { id: 1, name: 'Book 1', price: 250, quantity: 2, outOfStock: false, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Book 2', price: 150, quantity: 1, outOfStock: true, image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Book 3', price: 300, quantity: 1, outOfStock: false, image: 'https://via.placeholder.com/100' },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartPageContainer>
      <CartHeader>
        <h1>My Cart</h1>
      </CartHeader>

      <CartContent>
        <DeliveryInfo>
          <p>Deliver to: <strong>Rohit Kumar, </strong></p>
          <p>Daltonganj</p>
          <ChangeAddressButton>Change</ChangeAddressButton>
        </DeliveryInfo>

        {cartItems.length > 0 ? (
          <CartContainer>
            <CartItems>
              {cartItems.map((item) => (
                <CartItem key={item.id}>
                  <ItemImage src={item.image} alt={item.name} />
                  <ItemDetails>
                    <h2>{item.name}</h2>
                    <p>Price: ₹{item.price}</p>
                    {item.outOfStock && <OutOfStockText>Out of Stock</OutOfStockText>}
                    <QuantityControl>
                      <QuantityButton onClick={() => handleQuantityChange(item.id, -1)} disabled={item.outOfStock}>-</QuantityButton>
                      <span>{item.quantity}</span>
                      <QuantityButton onClick={() => handleQuantityChange(item.id, 1)} disabled={item.outOfStock}>+</QuantityButton>
                    </QuantityControl>
                    <ItemActions>
                      <ActionButton onClick={() => removeItem(item.id)}>Remove</ActionButton>
                      <ActionButton>Save for Later</ActionButton>
                    </ItemActions>
                  </ItemDetails>
                  <ItemTotal>₹{item.price * item.quantity}</ItemTotal>
                </CartItem>
              ))}
            </CartItems>

            <PriceDetails>
              <h3>Price Details</h3>
              <p>Price ({cartItems.length} items): ₹{calculateTotalPrice()}</p>
              <p>Discount: -₹{cartItems.length * 50}</p>
              <p>Delivery Charges: ₹40</p>
              <p><strong>Total Amount: ₹{calculateTotalPrice() - cartItems.length * 50 + 40}</strong></p>
            </PriceDetails>
          </CartContainer>
        ) : (
          <p>Your cart is empty.</p>
        )}

        <PlaceOrderButton>Place Order</PlaceOrderButton>
      </CartContent>

      <CartFooter>
        <FooterMenu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Cart</MenuItem>
          <MenuItem>Info</MenuItem>
          <MenuItem>Notifications</MenuItem>
          <MenuItem>Profile</MenuItem>
        </FooterMenu>
      </CartFooter>
    </CartPageContainer>
  );
};

export default CartPage;

const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const CartHeader = styled.header`
  background-color: #2874f0;
  color: white;
  padding: 15px;
  text-align: center;
`;

const CartContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const DeliveryInfo = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ChangeAddressButton = styled.button`
  background-color: #2874f0;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const CartContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* This will allow items to stack on smaller screens */
`;

const CartItems = styled.div`
  flex: 2;
`;

const CartItem = styled.div`
  display: flex;
  background: #fff;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 15px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const OutOfStockText = styled.p`
  color: red;
  font-weight: bold;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  background-color: #2874f0;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const ItemActions = styled.div`
  display: flex;
  gap: 15px;
`;

const ActionButton = styled.button`
  background-color: #2874f0;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const ItemTotal = styled.p`
  font-weight: bold;
  align-self: center;
`;

const PriceDetails = styled.div`
  flex: 1;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%; /* Price details will take full width on mobile */
    margin-top: 20px; /* Add margin to separate from items */
  }
`;

const PlaceOrderButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: orange;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
`;

const CartFooter = styled.footer`
  background-color: #fff;
  padding: 15px;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
`;

const FooterMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding: 10px;
`;

// Media Queries for responsiveness
const breakpoints = {
  mobile: '768px',
};

// Apply media query to adjust layout for mobile view
const CartContainerMobile = styled(CartContainer)`
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column; /* Stack the cart items and price details vertically */
  }
`;
