import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Gadbad from '../assets/gadbad.jpg';
import Tiramisu from '../assets/tiramisu.jpg';
import ChocolateSundae from '../assets/chocolate-sundae.jpg';

const popularItems = [
  {
    name: 'Gadbad Ice Cream',
    image: Gadbad,
    description: 'A Mangalore classic with layered flavors and dry fruits.',
  },
  {
    name: 'Tiramisu Delight',
    image: Tiramisu,
    description: 'Coffee-flavored Italian dessert served chilled.',
  },
  {
    name: 'Chocolate Sundae',
    image: ChocolateSundae,
    description: 'Rich chocolate topped with fudge and a cherry!',
  },
];

function PopularDishes() {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">🍨 Popular Dishes</h2>
      <Row>
        {popularItems.map((item, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.name}
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PopularDishes;
