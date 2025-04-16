import React from 'react';
import { Container } from 'react-bootstrap';

function Location() {
  console.log("✅ Location component is rendering...");

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📍 Visit Ideal Café</h2>
      <p className="text-center">
        MG Road, Mangalore, Karnataka 575001 <br />
        <strong>Open:</strong> 10:00 AM – 10:00 PM<br />
        <strong>Phone:</strong> +91-9876543210
      </p>
    </Container>
  );
}

export default Location;
