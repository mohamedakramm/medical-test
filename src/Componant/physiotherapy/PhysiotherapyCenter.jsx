import React from 'react';
import data from '../../locale/Phsiotherapy.json'
import { useState } from 'react'
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import'../physiotherapy/SinglePhysiotherapy'
import SinglePhysiotherapy from './SinglePhysiotherapy';
function PhysiotherapyCenter() {
  const [infoo,setInfoo]=useState([]);

  useEffect(()=>
    setInfoo(data)
  ,[])
  return (
    <div  className=' text-center'>
      <Container >
        <Row>
          {
            infoo.map((phy)=>
            <SinglePhysiotherapy key={phy.id} phy={phy}/>
          )
          }
        </Row>
      </Container>
    </div>
  );
}

export default PhysiotherapyCenter;