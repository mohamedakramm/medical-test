import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1, faStar ,faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import AppoinmentForm from '../appoinment/AppoinmentForm';
import FeedbackForm from './FeedbackForm';
import './doctordetail.css';
import './singleDoctor.css';
import SectionChat from "../../views/home/section/SectionChat"
import { faUser } from '@fortawesome/free-solid-svg-icons';
export default function Doctordetails() {
  let params = useParams();
  let [data, setData] = useState([]);
  let [feedbacks, setFeedbacks] = useState([]);

  const getData = () => {
    fetch(`http://localhost:3333/doctors/${params.doctorId}`)
      .then((json) => json.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    getData();
    const savedFeedback = localStorage.getItem(`feedback-${params.doctorId}`);
    if (savedFeedback) {
      setFeedbacks([savedFeedback]);
    }
  }, [params.doctorId]);

//   var x= localStorage.clear()
// console.log(x)
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const handleShowFeedbackForm = () => setShowFeedbackForm(true);
  const handleCloseFeedbackForm = () => setShowFeedbackForm(false);

  const addFeedback = (feedback) => {
    setFeedbacks([...feedbacks, feedback]);
    
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      
    }
  }, []);
  return (
    <div>
      <Container className='border rounded-12 bg-white shadow-sm inner-box py-14 px-15' style={{ marginTop: '20px' }}>
        <Row lg='2' md='2' sm='12'>
          <Col style={{ display: 'flex' }}>
            <Image src={data.image} style={{ width: '30%' }} />
            <div style={{ marginLeft: '15px' }}>
              <h3>{data.name}</h3>
              <p>{data.Pediatrician}</p>
              <p><FontAwesomeIcon icon={faMoneyBill1} /> fees: {data.fees} EGB</p>
              <p><FontAwesomeIcon icon={faLocationDot} /> Location: {data.location} </p>
            </div>
          </Col>
          <Col>
            <Button onClick={handleShowForm} className='btbook'>Book an appointment</Button>
            <AppoinmentForm show={showForm} handleClose={handleCloseForm} docid={data} />
          </Col>
        </Row>
      </Container>
      <Container className='border rounded-12 bg-white shadow-sm inner-box py-14 px-15' style={{ marginTop: '20px' }}>
        <Row lg='2' md='2' sm='1'>
          <Col>
            <p style={{color:'#089bab' , marginBottom:'30px'}}>Feedback</p>
            <p style={{fontWeight:'bold' ,fontSize:'20px'}}>General Feedback</p>
            <p><span style={{fontSize:'25px'}}>{data.name} </span><span>({feedbacks.length} review ) </span>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} /><FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} /><FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} /><FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} /><FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
              <span style={{fontWeight:'bold',marginLeft:'6px'}}>5.0 </span>   <span>Provides follow-ups and reviews as needed</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
              <span style={{fontWeight:'bold',marginLeft:'6px'}}>5.0 </span><span>Works to handle difficult cases</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: '#ecc023' }} />
              <span style={{fontWeight:'bold',marginLeft:'6px'}}>5.0 </span> <span>Information rich medical content</span>
            </p>
            <hr style={{ width: '100%' }} />
            <p>ALL reviews </p>
            {feedbacks.map((feedback, index) => (
              <p key={index}> 
              <p>
              <FontAwesomeIcon icon={faUser }  /> {user.name}</p>
              {feedback}</p>
            ))}
          </Col>
          <Col>
            <Button onClick={handleShowFeedbackForm}  className='btbook'>Leave a review</Button>
            <FeedbackForm
              doctorId={params.doctorId}
              show={showFeedbackForm}
              handleClose={handleCloseFeedbackForm}
              addFeedback={addFeedback}
            />
          </Col>
        </Row>
      </Container>
      <SectionChat/>
    </div>
  );
}
