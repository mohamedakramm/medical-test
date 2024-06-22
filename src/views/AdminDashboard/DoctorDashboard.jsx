import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';

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
      <Row>
        <Col>
          <h2>Doctor Dashboard</h2>
          <DoctorForm addDoctor={addDoctor} updateDoctor={updateDoctor} currentDoctor={currentDoctor} />
        </Col>
      </Row>
      <Row>
        <Col>
          <DoctorList doctors={doctors} editDoctor={editDoctor} deleteDoctor={deleteDoctor} />
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorDashboard;
