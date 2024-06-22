import React, { useState, useEffect } from 'react';
import { Form, Button,Alert } from 'react-bootstrap';

const PhyForm = ({ addPhy, updatePhy, currentPhy }) => {
  const [phy, setPhy] = useState({  name: '', spacifcation: '' ,location:'',phone:''});
  const [error, setError] = useState('');
  useEffect(() => {
    if (currentPhy) {
      setPhy(currentPhy);
    }
  }, [currentPhy]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhy({ ...phy, image: reader.result });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setPhy({ ...phy, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phy.name || !phy.spacifcation  ) {
      setError('Both name and specialization are required');
      return;
    }
    if (phy.id) {
      updatePhy(phy);
    } else {
      addPhy(phy);
    }
    setPhy({  name: '', spacifcation: '' ,location:'',phone:''});
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
          value={phy.name}
          onChange={handleChange}
          placeholder="Enter phy's name"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Specialization</Form.Label>
        <Form.Control
          type="text"
          name="spacifcation"
          value={phy.spacifcation}
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
          value={phy.location}
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
          value={phy.phone}
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
      
      <Button variant="primary" className="btbook1" type="submit">
        {phy.id ? 'Update phy' : 'Add phy'}
      </Button>
    </Form>
  );
};

export default PhyForm;
