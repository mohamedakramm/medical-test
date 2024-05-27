import React from 'react';
import { Table, Button } from 'react-bootstrap';

const PhyList = ({ phys, editPhy, deletePhy }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Specialization</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {phys.map(phy => (
          <tr key={phy.id}>
            <td>{phy.id}</td>
            <td>{phy.name}</td>
            <td>{phy.spacifcation}</td>
            <td>
              <Button variant="warning" onClick={() => editPhy(phy)}>Edit</Button>
              <Button variant="danger" onClick={() => deletePhy(phy.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PhyList;
