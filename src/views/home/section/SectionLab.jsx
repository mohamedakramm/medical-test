import { Button, Container, Image, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import SingleLab from '../../../Componant/Labtor/SingleLab';
import { useNavigate } from 'react-router-dom';
import './sectionLab.css';
import labimg from '../../../assets/WhatsApp Image 2024-04-24 at 02.20.42_d882bcd9.png';

export default function SectionLab() {
  const [infoo, setInfoo] = useState([]);
  const navigate = useNavigate();

  const scrollTotop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getData = () => {
    fetch('http://localhost:8888/labData')
      .then((response) => response.json())
      .then((data) => setInfoo(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = infoo.filter((lab) => lab.id <= 1);

  const gotoNewPge = () => {
    navigate('/ScanLabServices');
    scrollTotop();
  };

  return (
    <Container style={{marginTop:'70px'}} >
      <Row>
        <Col md={6} className="text-center textt">
          <h2>
            Experience high-quality <br /> testing and radiology without barriers
          </h2>
          <Button onClick={gotoNewPge} id="btn">
            Learn More
          </Button>
        </Col>
        <Col md={6} className="text-center">
          <Image src={labimg} className="imggg" fluid />
        </Col>
      </Row>
    </Container>
  );
}
