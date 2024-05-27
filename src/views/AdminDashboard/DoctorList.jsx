import React from 'react';
import { Table, Button } from 'react-bootstrap';

const DoctorList = ({ doctors, editDoctor, deleteDoctor }) => {
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
        {doctors.map(doctor => (
          <tr key={doctor.id}>
            <td>{doctor.id}</td>
            <td>{doctor.name}</td>
            <td>{doctor.specialization}</td>
            <td>
              <Button variant="warning" onClick={() => editDoctor(doctor)}>Edit</Button>
              <Button variant="danger" onClick={() => deleteDoctor(doctor.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DoctorList;
