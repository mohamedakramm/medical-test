import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import imgoffer from '../../../assets/sec-img-1-100495c6.png';
import imgoffer1 from '../../../assets/images (1).png';
import imgoffer2 from '../../../assets/images (2).png';

import './sectionOffer.css';
import { useNavigate } from 'react-router-dom';

export default function SectionOffer() {
  const navigate = useNavigate();

  const handleRoute = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container className='containerrr' style={{ marginTop: '30px' }}>
      <h1 className="h111">What We Offer</h1>
      <Row className="offers-container" lg={3} md={2} sm={1} xs={1}>
        <Col className=" text-center">
          <Image src={imgoffer1} className="imgOffer1" />
          <Button id="bttn" onClick={() => handleRoute('/bookFaster')}>
            Book faster and<br /> more efficiently
          </Button>
        </Col>
        <Col className="offer-item text-center">
          <Image src={imgoffer} className="imgOffer" />
          <Button id="bttn" onClick={() => handleRoute('/doctor')}>
            Follow up with your<br /> doctor daily and easily
          </Button>
        </Col>
        <Col className="offer-itemm text-center">
          <Image src={imgoffer2} className="imgOffer2" />
          <Button id="bttn" onClick={() => handleRoute('/ScanLabServices')}>
            Find the nearest<br /> laboratory or clinic
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
