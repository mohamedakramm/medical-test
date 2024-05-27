import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import DoctorDashboard from './DoctorDashboard'
import LabDashboard from './LabDashboard'
import { useNavigate } from 'react-router-dom';
import PhyDashboard from './PhyDashboard';
export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState('doctor');
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };
  const navigate=useNavigate()
  const goToHomePage=()=>{
    navigate('/')
  }
  return (
    <div style={{display:"flex"}}>
      <div style={{backgroundColor:"black" , color:'white', width:"15%"}} >
        <ul style={{marginTop:'100px',listStyle:'none',lineHeight:'70px',backgroundColor:'darkblue'}}>
          <li onClick={goToHomePage} >home</li>
          <li onClick={() => handleTabSelect('doctor')}>Doctor</li>
          <li onClick={() => handleTabSelect('lab')}>lab</li>
          <li onClick={() => handleTabSelect('Phsiotherapy')}>Phsiotherapy</li>
        </ul>
      </div>
      <Container>
        {selectedTab ==='doctor' && (<DoctorDashboard/>)}
        {selectedTab ==='lab' && (<LabDashboard/>)}
        {selectedTab ==='Phsiotherapy' && (<PhyDashboard/>)}
        
        
      </Container>
    </div>
  )
}
