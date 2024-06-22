import React from 'react'
import { Col,Image ,Button } from 'react-bootstrap'

import {  useNavigate } from 'react-router-dom';
import './SingleLab.css'
export default function SingleLab({lab}) {
  const navigate =useNavigate()
const gotoNewPge=()=>{
    navigate(`/ScanLabServices/${lab.id}`)
    
}
  return (
    <Col lg='4' md='6'  sm='12' className='p-30 ml-1' style={{marginTop:'0'}} onClick={()=>gotoNewPge()}>
        <div className='singleDoc border rounded-12 bg-white shadow-sm inner-box py-14 px-15'>
          <div style={{display:'flex'}}>
            <Image  variant="none" src={lab.image} className='docpho' />
                <div>
                <h3>{lab.name}</h3><br />
                <p style={{fontSize:'25px'}}>{lab.spacifcation}</p>
                </div>
              </div>
              <Button className='btttn'>visit  lab Profile</Button>
        </div>
          
              
    </Col>
   
    
  
  )
}
