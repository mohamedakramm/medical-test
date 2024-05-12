import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleLab from './SingleLab'
export default function Lab() {
 const [infoo,setInfoo]=useState([]);

 let getData=()=>{
  fetch("http://localhost:8888/labData")
  .then(json => json.json())
  .then(res => setInfoo(res))
 }

useEffect(()=>
    getData()
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
