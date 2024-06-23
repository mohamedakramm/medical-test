import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const ChatForm = ({ chatId, show, handleClose, addChatMessage }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedMessage = localStorage.getItem(`chat-${chatId}`);
    if (savedMessage) {
      setMessage(savedMessage);
    }
  }, [chatId]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(`chat-${chatId}`, message);
    addChatMessage(message);
    setMessage('');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send a Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="chatForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={handleChange}
              placeholder="Enter your message here"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ChatForm;
