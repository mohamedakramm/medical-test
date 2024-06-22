import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';
import './DoctorDashboard.css'; // استيراد ملف CSS المخصص

const DoctorDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [currentDoctor, setCurrentDoctor] = useState(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:3333/doctors');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const addDoctor = async (doctor) => {
    try {
      const id = doctors.length + 1; 
      const formattedId = id.toLocaleString(); 
      const newDoctor = { ...doctor, id: formattedId }; 
      const response = await axios.post('http://localhost:3333/doctors', newDoctor);
      setDoctors([...doctors, response.data]);
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  const updateDoctor = async (doctor) => {
    try {
      await axios.put(`http://localhost:3333/doctors/${doctor.id}`, doctor);
      setDoctors(doctors.map(d => (d.id === doctor.id ? doctor : d)));
      setCurrentDoctor(null);
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  const deleteDoctor = async (id) => {
    try {
      await axios.delete(`http://localhost:3333/doctors/${id}`);
      setDoctors(doctors.filter(d => d.id !== id));
    } catch (error) {
      console.error(`Failed to delete doctor with id ${id}:`, error);
    }
  };

  const editDoctor = (doctor) => {
    setCurrentDoctor(doctor);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2 className="text-center">Doctor Dashboard</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header className="custom-card-header">Add / Edit Doctor</Card.Header>
            <Card.Body>
              <DoctorForm addDoctor={addDoctor} updateDoctor={updateDoctor} currentDoctor={currentDoctor} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header className="custom-card-header">Doctor List</Card.Header>
            <Card.Body>
              <DoctorList doctors={doctors} editDoctor={editDoctor} deleteDoctor={deleteDoctor} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorDashboard;
