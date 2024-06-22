import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faShieldAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import './SectionChat.css';

export default function SectionChat() {
  return (
    <footer className="footer">
      <Container>
        <Row lg='3' md='3' sm='1'>
          <Col  className="footer-column" >
            <h3>Main</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </Col>
          <Col  className="footer-column">
            <h3>Team</h3>
            <ul>
              <li><a href="#">Our Doctors</a></li>
              <li><a href="#">Content Safety</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </Col>
          <Col className="footer-column footer-social">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#"><FontAwesomeIcon icon={faShieldAlt} /></a>
            <a href="#"><FontAwesomeIcon icon={faLock} /></a>
            <div  id='ppp'>
            Our services and the content of our website are for informational and awareness purposes only. Quick Care.com does not provide any medical advice, diagnostic, or treatment services. Please consult your healthcare provider.

            </div>
          </Col>
        </Row>
       
      </Container>
    </footer>
  );
}
