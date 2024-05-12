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
        <Container style={{marginTop:'90px'}}>
            <Row lg='2' md='2' sm='12'>
                <div >
                    
                        <Image src={ioo }  id='imgg' />
                    
                </div>
                <div >
                    
                        <h2 id='hhh'>Feeling <br /> better starts <br /> with moving <br /> better</h2>
                        <p id='ppp'> 
                        In our physiotherapy centers, we offer many services to help the patient, such as rehabilitative physiotherapy, pediatricphysiotherapy and Nutrition follow-ups
                        </p>
                        <Button onClick={()=>{gotoNewPge();scrollTotop()}} id='btnn' >learn more</Button>
                    
                
                </div>
            </Row>
        </Container>
    </div>
  )
}
