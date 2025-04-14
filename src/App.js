import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import MenuPage from './pages/MenuPage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import CafeNavbar from './components/Navbar';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Router>
      <CafeNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
