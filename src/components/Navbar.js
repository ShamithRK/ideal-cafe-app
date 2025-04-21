import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CafeNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">🍨 Ideal Café</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="/location">Location</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>

          {/* Search + Sign In + Cart */}
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search ice creams..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>

          <Nav>
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/cart">🛒</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CafeNavbar;
