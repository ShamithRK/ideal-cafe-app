import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotal } = useCart();

  return (
    <Container className="my-5">
      <h2 className="mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>
                    <Button
                      size="sm"
                      onClick={() => updateQuantity(item.name, -1)}
                    >
                      -
                    </Button>{' '}
                    {item.quantity}{' '}
                    <Button
                      size="sm"
                      onClick={() => updateQuantity(item.name, 1)}
                    >
                      +
                    </Button>
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.name)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4>Total: ₹{getTotal()}</h4>
          <Button variant="success" href="/checkout">
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
}

export default CartPage;
