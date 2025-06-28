import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  AiFillHome,
  AiOutlineDollarCircle,
  AiOutlineBuild,
  AiOutlineFieldTime,
  AiOutlineEnvironment,
  AiOutlineCheckCircle
} from 'react-icons/ai';

import aboutBanner from '../../assests/about-page-banner.jpg';
import aboutSide from '../../assests/about-page-side-pic.png';
import mission from '../../assests/our-mission.png';
import vision from '../../assests/our-vision.png';
import values from '../../assests/our-values.png';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className='about-page-wrapper'>
      {/* Banner Section */}
      <div className="about-page-banner">
        <img src={aboutBanner} alt="Gallery Banner" />
        <div className="about-page-banner-heading">
          About
          <div className="about-page-breadcrumb-line">
            <AiFillHome
              className="home-icon"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            / <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Container fluid className="my-5 p-0">
        {/* About Section */}
        <Row className='row-section1'>
          <Col md={6} xs={12} className='image-section pe-0'>
            <div className='image-section-container'>
              <img className='img1' src={aboutSide} alt="About Side Visual" />
            </div>
          </Col>
          <Col md={6} xs={12} className='ps-0'>
            <div className='info-section'>
              <p><strong>ABOUT US</strong></p>
              <h2>Let's Talk about Company</h2>
              <h6>
                VEER PANEL DOORS is one of the leading door manufacturers. V-MAKE is a popular brand across Karnataka and Tamilnadu for its standard quality, unique designs, and on-time delivery.
              </h6>
              <p className="fw-semibold text-secondary">
                In the fast competitive world we stepped into timber business in the year 1948(est) and took its fame in the year 2012 for its vast production and standardization in Karnataka. V-MAKE as a brand has always given quality outputs to its customers. We believe in delivering happiness on time without due date of pending doors so that our customers can have surety on our staff.
              </p>
              <p className="fw-semibold text-secondary">
                Experienced and knowledgeable sales personnel are there at your services on every step to guide and assist with proper digital services.
              </p>
              <p className="fw-semibold text-secondary">
                In our services we provide wide range of door designs for every purpose, theme and based on interior knowledge. We being a brand V-MAKE make sure our customers needs are fulfilled in every budget from low esteem doors to luxury-grade products. V-MAKE along with the hands of our managers, sales executive, employee have made a successful story line in manufacturing unit.
              </p>
              <p className="fw-semibold text-secondary">
                For upbringing in this level we have always ensured about the standard quality right from its raw material, processing, manufacturing, warehousing till its distribution.
              </p>
            </div>
          </Col>
        </Row>

        {/* Why Choose Us Section */}
        <div className='why-choose-container mt-5'>
          <Row className='why-choose-row px-3  px-md-5'>
            <Col md={5} className='why-choose-text-col mt-4'>
              <p className='section-label text-light fs-5 fw-semibold mb-0'>WHY</p>
              <p className='section-title text-light fs-2 fw-semibold pt-0 mb-0'>Choose Us</p>
              <p className='section-description text-white  my-0'>
                What sets us apart is our Purewood approach, in which we embrace the inherent beauty and versatility of wood to craft stunning door designs. Each door is an artistic work of craftsmanship crafted to evoke feelings of luxury and timelessness, giving our vast selection of species, finishes, and hardware options you the freedom to customize your door exactly to your liking.
              </p>
            </Col>
            <Col md={7} className='why-choose-features-col'>
              <Row className='features-grid py-3 m-0 px-0'>
                {[{
                  icon: <AiOutlineDollarCircle style={{ fontSize: '3rem' }} />,
                  label: "Best Price"
                }, {
                  icon: <AiOutlineBuild style={{ fontSize: '3rem' }} />,
                  label: "Factory Made"
                }, {
                  icon: <AiOutlineCheckCircle style={{ fontSize: '3rem' }} />,
                  label: "Custom Made"
                }, {
                  icon: <AiOutlineEnvironment style={{ fontSize: '3rem' }} />,
                  label: "Sustainable Wood"
                }, {
                  icon: <AiOutlineCheckCircle style={{ fontSize: '3rem' }} />,
                  label: "100% Natural Wood"
                }, {
                  icon: <AiOutlineFieldTime style={{ fontSize: '3rem' }} />,
                  label: "Quick Delivery"
                }].map((item, index) => (
                  <Col xs={12} sm={6} md={4} className='feature-col' key={index}>
                    <div className='feature-box'>
                      <div className='inner-box-content'>
                        <div>{item.icon}</div>
                        <div>{item.label}</div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>

        {/* Mission Section */}
        <p className='statement-mission-vision text-center pt-5'>Our Mission, Vision, and Values</p>
        <Row className="text-center py-4 mission-section m-0 px-0">
          {[{
            img: mission,
            title: "Our Mission",
            desc: "To craft and deliver world-class doors with tradition, quality, and innovation."
          }, {
            img: vision,
            title: "Our Vision",
            desc: "To be the most trusted brand in wooden doors, known for reliability and elegance."
          }, {
            img: values,
            title: "Our Values",
            desc: "We stand by integrity, craftsmanship, and customer-first service."
          }].map((item, index) => (
            <Col md={4} className={`mission-col ${index < 2 ? 'mission-divider' : ''}`} key={index}>
              <div className="mission-card">
                <img src={item.img} className="individual-icon" alt={item.title} />
                <p><strong>{item.title}</strong></p>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Enquiry Section */}
        <div className='enquiry-section '>
          <div className='enquiry-section-text'>
            <h4>Make Your Enquiry Now!</h4>
            <p>Talk to us! We will be glad to assist you</p>
          </div>
          <div className="enquiry-section-button">
            <Button variant="outline-light">Enquiry Now</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
