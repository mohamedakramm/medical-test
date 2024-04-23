import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import data from '../../locale/doctors.json'
import { Container, Row} from 'react-bootstrap';
import SingleDoctor from './SingleDoctor';
// import Doctor from './Doctor';
export default function Doctors() {
 const [info,setInfo]=useState([])
 useEffect(()=>
setInfo(data)
,[])


  return (
    <div className='m-5 text-center' style={{marginTop:'0'}}>
        <Container fluid>
            <Row>
            {
                info.map((doctor,index)=>
                <SingleDoctor key={index} doctor={doctor} />
            )
            }
            </Row>
    </Container>
    </div>
  )
}
