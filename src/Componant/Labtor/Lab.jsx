import React from 'react'
import data from '../../locale/labdata.json'
import { useState } from 'react'
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleLab from './SingleLab'
export default function Lab() {
 const [infoo,setInfoo]=useState([]);

useEffect(()=>
  setInfoo(data)
,[])

  return (
    <div  className=' text-center'>
      <Container >
        <Row>
          {
            infoo.map((lab)=>
            <SingleLab key={lab.id} lab={lab}/>
          )
          }
        </Row>
      </Container>
    </div>
  )
}
