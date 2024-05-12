import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Row} from 'react-bootstrap';
import SingleDoctor from './SingleDoctor';
import SpecialSelect from './SpecialSelect';
import { useLocation } from 'react-router-dom';
// import Doctor from './Doctor';


export default function Doctors() {
  const [info,setInfo]=useState([])
  let getData=()=>{
    fetch("http://localhost:3333/doctors")
    .then(json => json.json())
    .then(res => setInfo(res) )
  }

 useEffect(()=>
    getData()
,[])
let  filterData =(spaciall)=>{
  let filterSpecial=[]
  fetch(" http://localhost:3333/doctors" )
  .then(json =>json.json())
  .then(res => filterSpecial=res)
  .then(()=> setInfo(filterSpecial =filterSpecial.filter(special=>special.speciall===spaciall)))
 
}
const location=useLocation()
const isDoctorpage=location.pathname === '/doctor';
const isHomepage=location.pathname === '/';
const filterdoc=info.filter(doc =>doc.id <=3 )
  

 
  return (
    <div className=' text-center' >
      {
       isDoctorpage ? <SpecialSelect filterData={filterData} getData={getData}/> :null

      }
        <Container    >
            <Row>
            {
              isHomepage 
              ?
              filterdoc.map((doctor,index) =>
              <SingleDoctor key={index} doctor={doctor} />
              )
              :
                info.map((doctor,index)=>
                <SingleDoctor key={index} doctor={doctor} />
            )
            }
           

            </Row>
    </Container>
    </div>
  )
}
