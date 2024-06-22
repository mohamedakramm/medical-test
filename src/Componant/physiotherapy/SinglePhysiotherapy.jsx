import React from 'react'
import { Col,Image ,Button} from 'react-bootstrap'
import './PhysiotherapyCenter.css'
import {  useNavigate } from 'react-router-dom';

export default function SinglePhysiotherapy({phy}) {
  const navigate =useNavigate()
  const gotoNewPge=()=>{
      navigate(`/medicalCenter/${phy.id}`)
      
  }
  return (
    <Col lg='4' md='6'  sm='12' className='p-30 ml-1' style={{marginTop:'0'}} onClick={()=>gotoNewPge()}>
    <div className='singleDoc border rounded-12 bg-white shadow-sm inner-box py-14 px-15'>
      <div style={{display:'flex'}}>
        <Image  variant="none" src={phy.image} className='docpho' />
            <div>
            <h3>{phy.name}</h3><br />
            <p style={{textAlign:'center'}}>{phy.spacifcation}</p>
            </div>
          </div>
          <Button className='btttn'>visit  Profile</Button>
    </div>
      
          
</Col>
  )
}
