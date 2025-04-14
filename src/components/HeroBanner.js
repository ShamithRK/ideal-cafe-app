import React from 'react';
import { Carousel } from 'react-bootstrap';

// Import local images
import VanillaImg from '../assets/vanilla.jpg';
import ChocolateImg from '../assets/chocolate.jpg';
import StrawberryImg from '../assets/strawberry.jpg';

function HeroBanner() {
  const imageStyle = {
    height: '400px',
    objectFit: 'cover',
    width: '100%',
  };

  return (
    <Carousel fade interval={3000}>
      <Carousel.Item>
        <img
          style={imageStyle}
          src={VanillaImg}
          alt="Vanilla Delight"
        />
        <Carousel.Caption>
          <h3>Vanilla Delight 🍦</h3>
          <p>Classic and creamy vanilla like you’ve never had before!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={imageStyle}
          src={ChocolateImg}
          alt="Chocolate Heaven"
        />
        <Carousel.Caption>
          <h3>Chocolate Heaven 🍫</h3>
          <p>Rich, decadent, and pure happiness in a scoop.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={imageStyle}
          src={StrawberryImg}
          alt="Strawberry Bliss"
        />
        <Carousel.Caption>
          <h3>Strawberry Bliss 🍓</h3>
          <p>Sweet, fruity, and refreshingly awesome.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroBanner;
