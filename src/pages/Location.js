import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Location() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📍 Visit Ideal Café</h2>
      <Row>
        <Col md={6}>
          <Card className="shadow mb-4">
            <Card.Body>
              <Card.Title>Ideal Café – Mangalore</Card.Title>
              <Card.Text>
                <strong>Address:</strong> MG Road, Mangalore, Karnataka 575001<br />
                <strong>Hours:</strong> 10:00 AM – 10:00 PM (All days)<br />
                <strong>Phone:</strong> +91-9876543210
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <div style={{ height: '300px' }}>
            <iframe
              title="Ideal Café Location"
              src="https://www.google.com/maps/embed?pb=!1m18!..." // paste actual embed URL here
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Location;
