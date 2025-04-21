import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import cafeImg from '../assets/cafe.jpg'
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
                <strong>Address:</strong><br />
                MG Road, Mangalore,<br />
                Karnataka 575001, India<br /><br />
                <strong>Hours:</strong> 10:00 AM – 10:00 PM (All days)<br />
                <strong>Phone:</strong> +91-9876543210
              </Card.Text>
              <Button
                variant="primary"
                href="https://www.google.com/maps/place/Ideal+Cafe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <img
            src="https://i.imgur.com/s3h1JSp.png" // placeholder map image or café image
            alt="Ideal Café Map Preview"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Location;
