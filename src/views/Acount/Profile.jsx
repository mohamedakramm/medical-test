import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [selectedTab, setSelectedTab] = useState('personal');
  const [medicalInfo, setMedicalInfo] = useState({
    medicalCondition: '',
    medications: '',
    allergies: '',
    bloodType: '',
    length: '',
    weight: '',
    chronicDiseases: '',
  });
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMedicalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  // If the user data hasn't been loaded yet, show a loading indicator
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="custom-card" style={{ border: '5px solid #f1f3f4' }}>
      <Card.Header style={{ backgroundColor: '#BB8493' }}>
        <Nav variant="tabs" defaultActiveKey="#first" className="custom-nav">
          <Nav.Item>
            <Nav.Link
              href="#first"
              className="custom-nav-link"
              style={{ color: '#212529', fontWeight: 'bold' }}
              onClick={() => handleTabSelect('personal')}
            >
              Personal Information
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#link"
              className="custom-nav-link"
              style={{ color: '#212529', fontWeight: 'bold' }}
              onClick={() => handleTabSelect('medical')}
            >
              Medical Information
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body style={{ padding: '20px' }}>
        {selectedTab === 'personal' && (
          <Card className="custom-card" style={{ width: '700px', height: '210px', marginTop: '20px' }}>
            <ListGroup>
              
              <ListGroup.Item style={{ color: '#212529' }}>Name: {user.name}</ListGroup.Item>
              <ListGroup.Item style={{ color: '#212529' }}>Phone: {user.mobile}</ListGroup.Item>
              <ListGroup.Item style={{ color: '#212529' }}>Address: {user.address}</ListGroup.Item>
              <ListGroup.Item style={{ color: '#212529' }}>Email: {user.email}</ListGroup.Item>
              <ListGroup.Item>Age: 21</ListGroup.Item>
              
            </ListGroup>
          </Card>
        )}
        {selectedTab === 'medical' && (
          <Card className="custom-card" style={{ width: '630px', height: '520px' }}>
            <Form>
              <Form.Group controlId="medicalCondition">
                <Form.Label>Medical Condition</Form.Label>
                <Form.Control type="text" name="medicalCondition" value={medicalInfo.medicalCondition} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="medications">
                <Form.Label>Medications</Form.Label>
                <Form.Control type="text" name="medications" value={medicalInfo.medications} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="allergies">
                <Form.Label>Allergies</Form.Label>
                <Form.Control type="text" name="allergies" value={medicalInfo.allergies} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="bloodType">
                <Form.Label>Blood Type</Form.Label>
                <Form.Control type="text" name="bloodType" value={medicalInfo.bloodType} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="length">
                <Form.Label>Length</Form.Label>
                <Form.Control type="text" name="length" value={medicalInfo.length} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="weight">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="text" name="weight" value={medicalInfo.weight} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="chronicDiseases">
                <Form.Label>Chronic Diseases</Form.Label>
                <Form.Control type="text" name="chronicDiseases" value={medicalInfo.chronicDiseases} onChange={handleInputChange} />
              </Form.Group>
            </Form>
          </Card>
        )}
        {selectedTab === 'medical' && (
          <Button variant="primary" style={{ marginTop: '20px' }}>
            Save
          </Button>
        )}
        <Button variant="primary" style={{ marginTop: '20px' }}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}
