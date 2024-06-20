import React from 'react'
import { Container, Row } from 'react-bootstrap'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faShieldAlt, faLock } from '@fortawesome/free-solid-svg-icons';

export default function SctionChat() {
  return (
    <footer className="footer">

   

    <div className="footer-column">
          <h3>Main</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Team</h3>
          <ul>
            <li><a href="#">Our Doctors</a></li>
            <li><a href="#">Content Safety</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column footer-social">
      <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="#"><FontAwesomeIcon icon={faShieldAlt} /></a>
      <a href="#"><FontAwesomeIcon icon={faLock} /></a>
    </div>

    <div className="footer-disclaimer">
      إن خدماتنا ومحتويات موقعنا هي للأغراض الإعلامية والتوعوية فقط. لا يقدم موقع Quick Care.com أي مشورات طبية أو خدمات تشخيصية أو علاجية. يُرجى إستشارة طبيب الرعاية الخاص بك.
    </div>
  </footer>
  )
}
