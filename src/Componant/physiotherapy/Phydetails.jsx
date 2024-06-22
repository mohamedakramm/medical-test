import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import AppoinmentPhy from '../appoinment/AppoinmentPhy';
import FeedbackForm from '../doctors/FeedbackForm'; // Assuming you have a FeedbackForm component
import SectionChat from '../../views/home/section/SectionChat';

export default function Phydetails() {
  const { phyId } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [userr, setUserr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:2244/Phsiotherapy/${phyId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        // Handle error (e.g., show error message)
      }
    };
    fetchData();
  }, [phyId]);

  useEffect(() => {
    const storedFeedbacks = localStorage.getItem('phyFeedbacks');
    if (storedFeedbacks) {
      setFeedbacks(JSON.parse(storedFeedbacks));
    }
  }, []);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUserr(JSON.parse(storedUser));
    }
  }, []);

  const addFeedback = (newFeedback) => {
    const updatedFeedbacks = [...feedbacks, newFeedback];
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem('phyFeedbacks', JSON.stringify(updatedFeedbacks));
    handleCloseFeedbackForm();
  };

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleShowFeedbackForm = () => setShowFeedbackForm(true);
  const handleCloseFeedbackForm = () => setShowFeedbackForm(false);

  if (loading) {
    return <p>Loading...</p>;
  }

  

  return (
    <div>
      <Container className="border rounded-12 bg-white shadow-sm inner-box py-14 px-15" style={{ marginTop: '20px' }}>
        <Row lg="2" md="2" sm="12">
          <Col style={{ display: 'flex' }}>
            <Image src={data.image} style={{ width: '30%' }} />
            <div style={{ marginLeft: '15px' }}>
              <h3>{data.name}</h3>
              <p>{data.Pediatrician}</p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> number: {data.phone} 
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> Location: {data.location}
              </p>
            </div>
          </Col>
          <Col>
            <Button onClick={handleShowForm} className="btbook">
              Book an appointment
            </Button>
            <AppoinmentPhy show={showForm} handleClose={handleCloseForm} docid={data} />
          </Col>
        </Row>
      </Container>
      <Container className="border rounded-12 bg-white shadow-sm inner-box py-14 px-15" style={{ marginTop: '20px' }}>
        <Row lg="2" md="2" sm="1">
          <Col>
            <p style={{ color: '#089bab', marginBottom: '30px' }}>Feedback</p>
            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>General Feedback</p>
            <p>
              <span style={{ fontSize: '25px' }}>{data.name} </span>
              <span>({feedbacks.length} Reviews) </span>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
              <span style={{ fontWeight: 'bold', marginLeft: '6px' }}>5.0 </span>
              <span>Provides follow-ups and reviews as needed</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
              <span style={{ fontWeight: 'bold', marginLeft: '6px' }}>5.0 </span>
              <span>Works to handle difficult cases</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
              <span style={{ fontWeight: 'bold', marginLeft: '6px' }}>5.0 </span>
              <span>Information rich medical content</span>
            </p>
            <hr style={{ width: '100%' }} />
            <p>ALL reviews </p>
            {feedbacks.map((feedback, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <p>
                  <FontAwesomeIcon icon={faUser} /> {userr ? userr.name : 'Anonymous User'}
                </p>
                <p>{feedback}</p>
              </div>
            ))}
          </Col>
          <Col>
            <Button onClick={handleShowFeedbackForm} className="btbook">
              Leave a review
            </Button>
            <FeedbackForm
              show={showFeedbackForm}
              handleClose={handleCloseFeedbackForm}
              addFeedback={addFeedback}
            />
          </Col>
        </Row>
      </Container>
      <SectionChat />
    </div>
  );
}
