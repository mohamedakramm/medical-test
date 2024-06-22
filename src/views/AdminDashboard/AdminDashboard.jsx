import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import DoctorDashboard from './DoctorDashboard';
import LabDashboard from './LabDashboard';
import { useNavigate } from 'react-router-dom';
import PhyDashboard from './PhyDashboard';
import './AdminDashboard.css'; // استيراد ملف CSS المخصص

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState('doctor');
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/');
  };
  return (
    <div style={{ display: 'flex' }}>
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item" onClick={goToHomePage}>Home</li>
          <li className={`sidebar-item ${selectedTab === 'doctor' ? 'active' : ''}`} onClick={() => handleTabSelect('doctor')}>Doctor</li>
          <li className={`sidebar-item ${selectedTab === 'lab' ? 'active' : ''}`} onClick={() => handleTabSelect('lab')}>Lab</li>
          <li className={`sidebar-item ${selectedTab === 'Phsiotherapy' ? 'active' : ''}`} onClick={() => handleTabSelect('Phsiotherapy')}>Phsiotherapy</li>
        </ul>
      </div>
      <Container>
        {selectedTab === 'doctor' && (<DoctorDashboard />)}
        {selectedTab === 'lab' && (<LabDashboard />)}
        {selectedTab === 'Phsiotherapy' && (<PhyDashboard />)}
      </Container>
    </div>
  );
}
