import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import'../physiotherapy/SinglePhysiotherapy'
import SinglePhysiotherapy from './SinglePhysiotherapy';
function PhysiotherapyCenter() {
  const [infoo,setInfoo]=useState([]);

  let getData =()=>{
    fetch("http://localhost:2244/Phsiotherapy")
    .then(json => json.json())
    .then(res => setInfoo(res))
  }
//habhoba
  useEffect(()=>
    getData()
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