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
                <strong>Address:</strong><br />
                MG Road, Mangalore, Karnataka 575001<br /><br />
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
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.330585585779!2d74.8357832748398!3d12.886451687421184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a5d37e6dcf7%3A0xefcd9d9959357b1f!2sPABBA&#39;S!5e0!3m2!1sen!2sin!4v1745198136305!5m2!1sen!2sin"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Location;
