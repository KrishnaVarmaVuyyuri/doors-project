import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../../assests/SR-Logo.png';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <div className="sr-steel-hero-wrapper">
      <Navbar expand="lg" variant="dark" className="sr-steel-navbar">
        <Container fluid className="sr-steel-container">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="JSR Steel Doors" className="sr-steel-logo" />
          </Navbar.Brand>

          {/* Toggle button visible only on mobile/tablet */}
          <Navbar.Toggle aria-controls="main-navbar-nav" />

          <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
            <Nav className="sr-steel-nav-links">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/product">Products</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="#technical">Technical</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;