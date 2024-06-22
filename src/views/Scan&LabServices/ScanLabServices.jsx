import React from 'react'
import Lab from '../../Componant/Labtor/Lab'
import SectionChat from '../home/section/SectionChat'
import { useNavigate } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'


export default function ScanLabServices() {
  const navigate =useNavigate()
  let gotohomepage =()=>{
   navigate('/')
  }

  return (
    <div>
      <Container>
        <Row>
          <div style={{marginTop:'30px'}}>
            <span onClick={ ()=>gotohomepage()}>home  </span> &gt; <span>Radiology&test</span>
          </div>
        </Row>
      </Container>
      <Lab/>
      <SectionChat/>
    </div>
  )
}
