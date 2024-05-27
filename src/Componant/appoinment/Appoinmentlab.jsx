import React ,{ useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Appoinmentlab({ show, handleClose ,labId}) {
    
    const navigate = useNavigate();

  const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        idlab:'',
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
            idlab: labId?.id || '',  // Use docid?.id to handle potential undefined values
          }));
        } else {
          navigate('/login');
        }
      }, [navigate, labId]);
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
      if (!user) {
        return <div>Loading...</div>;
      }
  
      async function postData( ) {
        // Default options are marked with *
        const response = await fetch("http://localhost:5555/labappi", {
          method: "POST", 
                  headers: {
            "Content-Type": "application/json",
            
          },
         
          body: JSON.stringify(formData),
        });
        return response.json(); 
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
