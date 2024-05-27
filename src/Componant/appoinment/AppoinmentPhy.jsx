import React ,{ useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function AppoinmentPhy({ show, handleClose ,phyId }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        phyid: '',
        name: '',
        date: '',
        time: '',
        patientId:''
      });
      useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setFormData(prevFormData => ({
            ...prevFormData,
            patientId: parsedUser.id,
            phyid: phyId?.id || '',  
          }));
        } else {
          navigate('/login');
        }
      }, [navigate, phyId]);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Save form data to JSON file
        postData(formData);
        handleClose();
      };
    
  
      async function postData( ) {
        // Default options are marked with *
        const response = await fetch("http://localhost:3344/phyapp", {
          method: "POST", 
                  headers: {
            "Content-Type": "application/json",
            
          },
         
          body: JSON.stringify(formData),
        });
        return response.json(); 
      }
      if (!user) {
        return <div>Loading...</div>;
      }
      
  return (
    <div>
           <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Make an Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    </div>
  )
}
