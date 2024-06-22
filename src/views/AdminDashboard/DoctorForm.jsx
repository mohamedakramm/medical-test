import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const DoctorForm = ({ addDoctor, updateDoctor, currentDoctor }) => {
  const [doctor, setDoctor] = useState({ name: '', specialization: '', Pediatrician: '', location: '', fees: '', speciall: '', image: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentDoctor) {
      setDoctor(currentDoctor);
    }
  }, [currentDoctor]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setDoctor({ ...doctor, image: reader.result });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setDoctor({ ...doctor, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!doctor.name || !doctor.specialization) {
      setError('Both name and specialization are required');
      return;
    }
    if (doctor.id) {
      updateDoctor(doctor);
    } else {
      addDoctor(doctor);
    }
    setDoctor({ name: '', specialization: '', Pediatrician: '', location: '', fees: '', speciall: '', image: '' });
    setError('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={doctor.name}
          onChange={handleChange}
          placeholder="Enter doctor's name"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Specialization</Form.Label>
        <Form.Control
          type="text"
          name="specialization"
          value={doctor.specialization}
          onChange={handleChange}
          placeholder="Enter specialization"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Pediatrician</Form.Label>
        <Form.Control
          type="text"
          name="Pediatrician"
          value={doctor.Pediatrician}
          onChange={handleChange}
          placeholder="Enter Pediatrician"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={doctor.location}
          onChange={handleChange}
          placeholder="Enter location"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fees</Form.Label>
        <Form.Control
          type="number"
          name="fees"
          value={doctor.fees}
          onChange={handleChange}
          placeholder="Enter fees"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Speciall</Form.Label>
        <Form.Control
          type="text"
          name="speciall"
          value={doctor.speciall}
          onChange={handleChange}
          placeholder="Enter speciall"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          placeholder="Choose your Photo"
          required
        />
      </Form.Group>
      <Button variant="primary" className="btbook1" type="submit">
        {doctor.id ? 'Update Doctor' : 'Add Doctor'}
      </Button>
    </Form>
  );
};

export default DoctorForm;
