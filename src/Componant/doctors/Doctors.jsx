import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleDoctor from './SingleDoctor';
import SpecialSelect from './SpecialSelect';
import { useLocation } from 'react-router-dom';

export default function Doctors() {
  const [info, setInfo] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3333/doctors");
      const data = await response.json();
      setInfo(data);
      setFilteredDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = (filter) => {
    const filtered = info.filter(doctor =>
      (doctor.name && doctor.name.toLowerCase().includes(filter.toLowerCase())) ||
      (doctor.speciall && doctor.speciall.toLowerCase().includes(filter.toLowerCase()))
    );
    setFilteredDoctors(filtered);
  };

  const location = useLocation();
  const isDoctorPage = location.pathname === '/doctor';
  const isHomePage = location.pathname === '/';
  const filterDoc = filteredDoctors.filter(doc => doc.id <= 3);

  return (
    <div className='text-center'>
      {isDoctorPage ? <SpecialSelect filterData={filterData} /> : null}
      <Container>
        <Row>
          {isHomePage 
            ? filterDoc.map((doctor, index) => <SingleDoctor key={index} doctor={doctor} />)
            : filteredDoctors.map((doctor, index) => <SingleDoctor key={index} doctor={doctor} />)
          }
        </Row>
      </Container>
    </div>
  );
}
