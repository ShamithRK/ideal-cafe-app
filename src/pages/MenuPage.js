import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

import GadbadImg from '../assets/gadbad.jpg';
import CoffeeImg from '../assets/coffee.jpg';
import BrownieImg from '../assets/brownie.jpg';
import MasalaFriesImg from '../assets/fries.jpg';
import StrawberryScoopImg from '../assets/strawberry.jpg';
import VanillaSundaeImg from '../assets/vanilla.jpg';
import MangoLassiImg from '../assets/mango-lassi.jpg';
import SandwichImg from '../assets/sandwich.jpg';
import TiramisuImg from '../assets/tiramisu.jpg';
import ChocolateSundaeImg from '../assets/chocolate-sundae.jpg';

const menuItems = [
  {
    name: 'Gadbad Ice Cream',
    image: GadbadImg,
    description: 'A classic layered treat with fruits and jelly.',
    price: 120,
    category: 'Ice Creams',
  },
  {
    name: 'Strawberry Scoop',
    image: StrawberryScoopImg,
    description: 'Refreshing and sweet strawberry ice cream.',
    price: 90,
    category: 'Ice Creams',
  },
  {
    name: 'Vanilla Sundae',
    image: VanillaSundaeImg,
    description: 'Creamy vanilla topped with nuts and cherry.',
    price: 100,
    category: 'Ice Creams',
  },
  {
    name: 'Chocolate Sundae',
    image: ChocolateSundaeImg,
    description: 'Rich chocolate topped with fudge and a cherry!',
    price: 130,
    category: 'Ice Creams',
  },
  {
    name: 'Tiramisu Delight',
    image: TiramisuImg,
    description: 'Coffee-flavored Italian dessert served chilled.',
    price: 140,
    category: 'Desserts',
  },
  {
    name: 'Chocolate Brownie',
    image: BrownieImg,
    description: 'Warm gooey brownie served with ice cream.',
    price: 130,
    category: 'Desserts',
  },
  {
    name: 'Filter Coffee',
    image: CoffeeImg,
    description: 'Strong South Indian filter coffee.',
    price: 60,
    category: 'Beverages',
  },
  {
    name: 'Mango Lassi',
    image: MangoLassiImg,
    description: 'Cool mango drink made with yogurt.',
    price: 70,
    category: 'Beverages',
  },
  {
    name: 'Masala Fries',
    image: MasalaFriesImg,
    description: 'Crispy fries tossed in tangy masala.',
    price: 80,
    category: 'Snacks',
  },
  {
    name: 'Veg Sandwich',
    image: SandwichImg,
    description: 'Grilled sandwich with fresh veggies.',
    price: 90,
    category: 'Snacks',
  },
];

function MenuPage() {
  const { addToCart } = useCart();

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🧾 Our Menu</h2>
      <Row>
        {menuItems.map((item, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <h5>₹{item.price}</h5>
                <Button variant="primary" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MenuPage; // ✅ Don't forget this line!
