import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function CheckoutPage() {
  const { cartItems, getTotal } = useCart();
  console.log('Cart Items:', cartItems); 

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deliveryType: 'dine-in',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.phone) {
      console.log('Order Placed:', formData, cartItems);
      setOrderPlaced(true);
    } else {
      alert('Please fill in all details');
    }
  };

  return (
    <Container className="my-5">
      <h2>Checkout</h2>

      {orderPlaced ? (
        <Alert variant="success">
          🎉 Your order has been placed successfully, {formData.name}!
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formDeliveryType" className="mb-3">
                <Form.Label>Delivery Option</Form.Label>
                <Form.Select
                  name="deliveryType"
                  value={formData.deliveryType}
                  onChange={handleChange}
                >
                  <option value="dine-in">Dine-in</option>
                  <option value="takeaway">Takeaway</option>
                </Form.Select>
              </Form.Group>

              <Button type="submit" variant="success">
                Place Order
              </Button>
            </Col>

            <Col md={6}>
              <h4>Order Summary</h4>
              {cartItems.map((item) => (
                <div key={item.name}>
                  {item.quantity} x {item.name} — ₹{item.price * item.quantity}
                </div>
              ))}
              <hr />
              <h5>Total: ₹{getTotal()}</h5>
            </Col>
          </Row>
        </Form>
      )}
    </Container>
  );
}

export default CheckoutPage;
