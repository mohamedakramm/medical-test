import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderOne.css';

function HeaderOne() {
  return (
    <header className="header">
      <div className="header-content">
          <h1 className="header-title">Care Quick</h1>
        <Container>
          <Row className="header-content1">
            <Col>
              <p className="header-text">
                Get answers to your medical inquiries via <br /> your phone anywhere and anytime
              </p>
              <div className="header-buttons">
                <Button variant="primary" className="btn custom-button">Talk to a Doctor</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default HeaderOne;
