import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import LabForm from './LabForm';
import LabList from './LabList';

const DoctorDashboard = () => {
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
      console.error('Error fetching doctors:', error);
    }
  };

  const addLab = async (lab) => {
    try {
      const id = labs.length ? labs[labs.length - 1].id + 1 : 1;
      const newDoctor = { ...lab, id };
      const response = await axios.post('http://localhost:8888/labData', newDoctor);
      setLabs([...labs, response.data]);
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  const updateLab = async (lab) => {
    try {
      await axios.put(`http://localhost:8888/labData/${lab.id}`, lab);
      setLabs(labs.map(d => (d.id === lab.id ? lab : d)));
      setCurrentLab(null);
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  const deleteLab = async (id) => {
    try {
      await axios.delete(`http://localhost:8888/labData/${id}`);
      setLabs(labs.filter(d => d.id !== id));
    } catch (error) {
      console.error(`Failed to delete doctor with id ${id}:`, error);
    }
  };

  const editDoctor = (doctor) => {
    setCurrentLab(doctor);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Lab Dashboard</h2>
          <LabForm addLab={addLab} updateLab={updateLab} currentLab={currentLab} />
        </Col>
      </Row>
      <Row>
        <Col>
          <LabList labs={labs} editLab={editDoctor} deleteLab={deleteLab} />
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorDashboard;
