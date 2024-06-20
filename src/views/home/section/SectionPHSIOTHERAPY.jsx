import React from 'react'
import './SectionPHSIOTHERAPY.css'
import { Button,  Container, Image, Row } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom';
import ioo from '../../../assets/images.jpeg'
export default function SectionPHSIOTHERAPY() {
    const scrollTotop=()=>{
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
  
  }
   
  const navigate =useNavigate()
  const gotoNewPge=()=>{
      navigate("/medicalCenter")
      
  }
  return (
    <div>
        
            <Row lg='2' md='2' sm='12'>
                <div >
                    
                        <Image src={ioo }  id='imgg' />
                    
                </div>
                <div >
                    
                        <h2 id='hhh'>Feeling <br /> better starts <br /> with moving <br /> better</h2>
                        <div id='ppp'> 
                        In our physiotherapy centers, we offer many services to help the patient, such as rehabilitative physiotherapy, pediatricphysiotherapy and Nutrition follow-ups
                        </div>
                        <Button onClick={()=>{gotoNewPge();scrollTotop()}} id='btnn' >learn more</Button>
                    
                
                </div>
            </Row>
        
    </div>
  )
}
