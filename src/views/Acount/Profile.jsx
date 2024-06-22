import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // استيراد مكتبة Font Awesome
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './profile.css'; // استيراد ملف CSS المخصص

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
    <Card className="custom-card" style={{ border: '5px solid #f1f3f4', maxWidth: '800px', margin: '20px auto' }}>
      <Card.Header className="custom-card-header">
        <Nav variant="tabs" defaultActiveKey="#first" className="custom-nav">
          <Nav.Item>
            <Nav.Link
              href="#first"
              className={`custom-nav-link ${selectedTab === 'personal' ? 'active' : ''}`}
              onClick={() => handleTabSelect('personal')}
            >
              Personal Information
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#link"
              className={`custom-nav-link ${selectedTab === 'medical' ? 'active' : ''}`}
              onClick={() => handleTabSelect('medical')}
            >
              Medical Information
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body className="custom-card-body">
        {selectedTab === 'personal' && (
          <Card className="custom-sub-card">
            <ListGroup>
              <ListGroup.Item className="custom-list-item">Name: {user.name}</ListGroup.Item>
              <ListGroup.Item className="custom-list-item">Phone: {user.mobile}</ListGroup.Item>
              <ListGroup.Item className="custom-list-item">Address: {user.address}</ListGroup.Item>
              <ListGroup.Item className="custom-list-item">Email: {user.email}</ListGroup.Item>
              <ListGroup.Item className="custom-list-item">Age: 21</ListGroup.Item>
            </ListGroup>
          </Card>
        )}
        {selectedTab === 'medical' && (
          <Card className="custom-sub-card">
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
            <Button variant="secondary" className="custom-button2" style={{ marginTop: '20px' }}>
              <i className="fa fa-save"></i> Save
            </Button>
          </Card>
        )}
        <Button variant="secondary" className="custom-button" style={{ marginTop: '20px' }}>
          <i className="fa fa-edit"></i> Edit
        </Button>
      </Card.Body>
    </Card>
  );
}
