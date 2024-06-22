import React from 'react'
import './SectionPHSIOTHERAPY.css'
import { Button,  Col,  Container, Image, Row } from 'react-bootstrap'
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
    
        <Container style={{marginTop:'90px'}}>
          
        <Row lg='2' md='2' sm='1'>
                <Col >
                    
                        <Image src={ioo}  id='imgg' />
                    
                </Col>
                <Col  style={{textAlign:'center' , marginTop:'60px'}}>
                    
                        <h2 >Feeling  better starts <br /> with moving <br /> better</h2>
                        <div id='ppp'> 
                        In our physiotherapy centers, we offer many services to help the patient, such as rehabilitative physiotherapy, pediatricphysiotherapy and Nutrition follow-ups
                        </div>
                        <Button onClick={()=>{gotoNewPge();scrollTotop()}} id='btnn' >learn more</Button>
                    
                
                </Col>
            </Row>
        
        </Container>
    
  )
}
