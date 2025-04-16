import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const offers = [
  {
    title: 'Buy 1 Get 1 Free',
    description: 'On all Sundaes every Tuesday!',
    validTill: 'April 30, 2025',
    type: 'Limited Time',
  },
  {
    title: '20% Off for Students',
    description: 'Show your student ID and get a flat 20% off!',
    validTill: 'May 31, 2025',
    type: 'Student Special',
  },
  {
    title: 'Summer Chill Combo',
    description: 'Get a free cold coffee with any dessert above ₹150.',
    validTill: 'June 30, 2025',
    type: 'Summer Exclusive',
  },
];

function Offers() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🎁 Our Offers</h2>
      <Row>
        {offers.map((offer, index) => (
          <Col md={4} sm={6} key={index} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Body>
                <Card.Title>
                  {offer.title}{' '}
                  <Badge bg="warning" text="dark" className="ms-2">
                    {offer.type}
                  </Badge>
                </Card.Title>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Valid till: {offer.validTill}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Offers;
