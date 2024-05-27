import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import PhyForm from './PhyForm';
import PhyList from './PhyList';

const PhyDashboard = () => {
  const [phys, setPhys] = useState([]);
  const [currentPhy, setCurrentPhy] = useState(null);

  useEffect(() => {
    fetchPhys();
  }, []);

  const fetchPhys = async () => {
    try {
      const response = await axios.get('http://localhost:2244/Phsiotherapy');
      setPhys(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const addPhy = async (phy) => {
    try {
      const id = phys.length ? phys[phys.length - 1].id + 1 : 1;
      const newDoctor = { ...phy, id };
      const response = await axios.post('http://localhost:2244/Phsiotherapy', newDoctor);
      setPhys([...phys, response.data]);
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  const updatePhy = async (phy) => {
    try {
      await axios.put(`http://localhost:2244/Phsiotherapy/${phy.id}`, phy);
      setPhys(phys.map(d => (d.id === phy.id ? phy : d)));
      setCurrentPhy(null);
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  const deletePhy = async (id) => {
    try {
      await axios.delete(`http://localhost:2244/Phsiotherapy/${id}`);
      setPhys(phys.filter(d => d.id !== id));
    } catch (error) {
      console.error(`Failed to delete doctor with id ${id}:`, error);
    }
  };

  const editphy = (phy) => {
    setCurrentPhy(phy);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Physiotherapy Dashboard</h2>
          <PhyForm addPhy={addPhy} updatePhy={updatePhy} currentPhy={currentPhy} />
        </Col>
      </Row>
      <Row>
        <Col>
          <PhyList phys={phys} editPhy={editphy} deletePhy={deletePhy} />
        </Col>
      </Row>
    </Container>
  );
};

export default PhyDashboard;
