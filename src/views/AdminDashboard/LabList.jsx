import React from 'react';
import { Table, Button } from 'react-bootstrap';

const LabList = ({ labs, editLab, deleteLab }) => {
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
        {labs.map(lab => (
          <tr key={lab.id}>
            <td>{lab.id}</td>
            <td>{lab.name}</td>
            <td>{lab.spacifcation}</td>
            <td>
              <Button variant="warning" onClick={() => editLab(lab)}>Edit</Button>
              <Button variant="danger" onClick={() => deleteLab(lab.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LabList;
