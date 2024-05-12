import React from 'react'
import  { useState } from 'react'
import { useEffect } from 'react';

import { Button, Container, Row } from 'react-bootstrap'


export default function SpecialSelect({filterData,getData}) {
    
    const [spacial ,setSpacial]=useState([])
    let getSpacial=()=>{
      fetch(" http://localhost:2222/special")
      .then(json =>json.json())
      .then(res => setSpacial(res))
    }
   useEffect(()=>
   getSpacial()
  ,[])
  return (
    <div>
        <Container style={{marginTop:'10px' ,marginRight:'7px'}}>
        <Row>
        <Button style={{width:'8%'  }} onClick={()=> getData()} >all</Button>
        {
          spacial.map( spaciall=>
            <Button style={{width:'12%' ,marginLeft:'10px'}} key={Math.random()} onClick={()=>filterData(spaciall)} >{spaciall}</Button>
          )
        }
        </Row>
       </Container>
    </div>
  )
}
