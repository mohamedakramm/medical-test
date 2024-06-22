import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LabForm from './LabForm';
import LabList from './LabList';

const LabDashboard = () => {
  const [labs, setLabs] = useState([]);
  const [currentLab, setCurrentLab] = useState(null);

  useEffect(() => {
    fetchLabs();
  }, []);

  const fetchLabs = async () => {
    try {
      const response = await axios.get('http://localhost:8888/labData');
      setLabs(response.data);
    } catch (error) {
      console.error('Error fetching labs:', error);
    }
  };

  const addLab = async (lab) => {
    try {
      const response = await axios.post('http://localhost:8888/labData', lab);
      setLabs([...labs, response.data]);
    } catch (error) {
      console.error('Error adding lab:', error);
    }
  };

  const updateLab = async (lab) => {
    try {
      await axios.put(`http://localhost:8888/labData/${lab.id}`, lab);
      setLabs(labs.map(l => (l.id === lab.id ? lab : l)));
      setCurrentLab(null);
    } catch (error) {
      console.error('Error updating lab:', error);
    }
  };

  const deleteLab = async (id) => {
    try {
      await axios.delete(`http://localhost:8888/labData/${id}`);
      setLabs(labs.filter(l => l.id !== id));
    } catch (error) {
      console.error(`Failed to delete lab with id ${id}:`, error);
    }
  };

  const editLab = (lab) => {
    setCurrentLab(lab);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2 className="text-center">Lab Dashboard</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header className="custom-card-header">Add / Edit Lab</Card.Header>
            <Card.Body>
              <LabForm addLab={addLab} updateLab={updateLab} currentLab={currentLab} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header className="custom-card-header">Lab List</Card.Header>
            <Card.Body>
              <LabList labs={labs} editLab={editLab} deleteLab={deleteLab} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LabDashboard;
