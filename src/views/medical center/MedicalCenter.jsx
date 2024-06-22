import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import PhysiotherapyCenter from '../../Componant/physiotherapy/PhysiotherapyCenter'
import SectionChat from '../home/section/SectionChat'

export default function MedicalCenter() {
  const navigate =useNavigate()
  let gotohomepage =()=>{
   navigate('/')
  }

  return (
    <div>
      <Container>
        <Row>
          <div style={{marginTop:'30px'}}>
            <span onClick={ ()=>gotohomepage()}>home  </span> &gt; <span>Phsiotherapy</span>
          </div>
        </Row>
      </Container>
      <PhysiotherapyCenter/>
      <SectionChat/>
    </div>
  )
}
