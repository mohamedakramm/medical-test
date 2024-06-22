import React, { useState, useEffect } from 'react';
import { Form, Button,Alert } from 'react-bootstrap';

const LabForm = ({ addLab, updateLab, currentLab }) => {
  const [lab, setlab] = useState({  name: '', spacifcation: '' ,location:'',phone:'',image:''});
  const [error, setError] = useState('');
  useEffect(() => {
    if (currentLab) {
      setlab(currentLab);
    }
  }, [currentLab]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setlab({ ...lab, image: reader.result });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setlab({ ...lab, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lab.name || !lab.spacifcation  ) {
      setError('Both name and specialization are required');
      return;
    }
    if (lab.id) {
      updateLab(lab);
    } else {
      addLab(lab);
    }
    setlab({  name: '', spacifcation: '' ,location:'',phone:'',image:''});
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
          value={lab.name}
          onChange={handleChange}
          placeholder="Enter lab's name"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Specialization</Form.Label>
        <Form.Control
          type="text"
          name="spacifcation"
          value={lab.spacifcation}
          onChange={handleChange}
          placeholder="Enter specialization"
          required
        />
      </Form.Group>
      
      <Form.Group>
        <Form.Label>location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={lab.location}
          onChange={handleChange}
          placeholder="Enter location"
          required
        />
      </Form.Group>
      
      <Form.Group>
        <Form.Label>phone</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          value={lab.phone}
          onChange={handleChange}
          placeholder="Enter phone"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>photo</Form.Label>
        <Form.Control
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          placeholder="choose your Photo"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {lab.id ? 'Update lab' : 'Add lab'}
      </Button>
    </Form>
  );
};

export default LabForm;
