import React from 'react';
import HeroBanner from '../components/HeroBanner';
import PopularDishes from '../components/PopularDishes';

function Home() {
  return (
    <div>
      <HeroBanner />
      <div style={{ padding: '2rem' }}>
        <h2>Welcome to Ideal Café 🍨</h2>
        <p>Explore our award-winning ice creams and special offers!</p>
      </div>
      <PopularDishes />
    </div>
  );
}

export default Home;
