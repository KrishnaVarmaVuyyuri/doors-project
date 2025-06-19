import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../../assests/SR-Logo.png';
import bannerImage from '../../assests/footer-image.png';  // your banner image

const Footer = () => {
  return (
    <footer className="sr-steel-footer-wrapper">

      {/* Banner full width, outside container */}
      <div
        className="sr-steel-footer-top">
      </div>
        <Container fluid className="px-5 text-center sr-steel-footer-container1">
          <Row>
            <Col md={3} className="sr-steel-footer-logo-col">
              <img src={logo} alt="Logo" className="sr-steel-footer-logo" />
            </Col>
            <Col md={2} className="sr-steel-footer-link-group">
              <h5 className="sr-steel-footer-heading">About</h5>
            </Col>
            <Col md={2} className="sr-steel-footer-link-group">
              <h5 className="sr-steel-footer-heading">Products</h5>
            </Col>
            <Col md={2} className="sr-steel-footer-link-group">
              <h5 className="sr-steel-footer-heading">Technical</h5>
            </Col>
            <Col md={3} className="sr-steel-footer-link-group">
              <h5 className="sr-steel-footer-heading">Contact Us</h5>
            </Col>
          </Row>
        </Container>

      {/* Bottom part inside container */}
      <Container fluid className="sr-steel-footer-container">
        <hr className="sr-steel-footer-divider" />

        <Row className="sr-steel-footer-bottom">
          <Col md={3}>
            <p className="sr-steel-footer-desc">
              Complete your dream home <br />
              with products from furnistore
            </p>
            <div className="sr-steel-footer-icons">
              <div className="sr-steel-footer-icon"><FaFacebookF /></div>
              <div className="sr-steel-footer-icon"><FaInstagram /></div>
              <div className="sr-steel-footer-icon"><FaLinkedinIn /></div>
            </div>
          </Col>
          <Col md={2}>
            <ul className="sr-steel-footer-list">
              <li>About Us</li>
              <li>Features</li>
              <li>News & Blog</li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="sr-steel-footer-list">
              <li>we work</li>
              <li>Capital</li>
              <li>Security</li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="sr-steel-footer-list">
              <li>Email</li>
              <li>Website</li>
              <li>Whatsapp</li>
            </ul>
          </Col>
          <Col md={3} className="sr-steel-footer-contact">
            <p>Yogyakarta, Indonesia</p>
            <p>furnistore@gmail.com</p>
            <p>0812 - 5446 - 7098</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
