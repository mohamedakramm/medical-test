import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Spinner, Alert } from 'react-bootstrap';

const UserBookings = ({ userId }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:3344/phyapp`);
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [userId]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h3>Your Bookings</h3>
          <ListGroup>
            {bookings.map((booking) => (
              <ListGroup.Item key={booking.id}>
                <div>
                  <strong>Booking ID:</strong> {booking.id}
                </div>
                <div>
                  <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}
                </div>
                <div>
                  <strong>Time:</strong> {booking.time}
                </div>
                <div>
                  <strong>Physiotherapist:</strong> {booking.physiotherapistName}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserBookings;
