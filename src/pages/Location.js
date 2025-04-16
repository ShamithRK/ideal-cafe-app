import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Location() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📍 Visit Our Café</h2>
      <Row>
        <Col md={6}>
          <Card className="shadow mb-4">
            <Card.Body>
              <Card.Title>Ideal Café - Mangalore</Card.Title>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.700670719253!2d74.83633101479156!3d12.917999690883105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35ba555555555%3A0xabcdefabcdef1234!2sIdeal%20Cafe!5e0!3m2!1sen!2sin!4v1612345678901"
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
