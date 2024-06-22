import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form, InputGroup } from 'react-bootstrap';
import Select from 'react-select';
import "../../views/doctors/SearchDoctor.css"
export default function SpecialSelect({ filterData }) {
  const [specialties, setSpecialties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getSpecialties = async () => {
    try {
      const response = await fetch("http://localhost:2222/special");
      const data = await response.json();
      setSpecialties(data.map(spec => ({ value: spec, label: spec })));
    } catch (error) {
      console.error("Error fetching specialties:", error);
    }
  };

  useEffect(() => {
    getSpecialties();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterData(e.target.value);
  };

  const handleSpecialtyChange = (selectedOption) => {
    filterData(selectedOption.value);
  };

  return (
    <div>
      <section className="full-white-box py-2 py-md-0 " style={{marginTop:'60px'}}>
        <Container>
          <div className="border rounded-12 bg-white shadow-sm inner-box py-14 px-15">
            <Row className="g-3">
              <Col>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search for doctor"
                    aria-label="Search for doctor"
                    className="rounded py-2 pe-5"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <InputGroup.Text className="position-absolute top-50 end-0 me-1 translate-middle-y border-0 bg-white py-0 px-2 z-5">
                    <i className="fa-solid fa-magnifying-glass text-gray-1200"></i>
                  </InputGroup.Text>
                </InputGroup>
              </Col>
              <Col>
                <Select
                  options={specialties}
                  placeholder="Choose a specialty"
                  className="basic-single"
                  classNamePrefix="select"
                  onChange={handleSpecialtyChange}
                  
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}
