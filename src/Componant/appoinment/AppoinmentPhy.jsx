import React ,{ useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

export default function AppoinmentPhy({ show, handleClose ,phyId }) {
    const [formData, setFormData] = useState({
        phyid: `${phyId.id}`,
        name: '',
        date: '',
        time: '',
      });
    
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
