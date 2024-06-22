import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const FeedbackForm = ({ doctorId, show, handleClose, addFeedback }) => {
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const savedFeedback = localStorage.getItem(`feedback-${doctorId}`);
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, [doctorId]);

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(`feedback-${doctorId}`, feedback);
    addFeedback(feedback);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Leave a Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="feedbackForm.ControlTextarea1">
            <Form.Label>Feedback</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={feedback}
              onChange={handleChange}
              placeholder="Enter your feedback here"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FeedbackForm;
