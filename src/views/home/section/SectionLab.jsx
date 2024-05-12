import { Button,  Container, Image } from 'react-bootstrap';
import React from 'react'
import SingleLab from '../../../Componant/Labtor/SingleLab'
import { useState ,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
import './sectionLab.css'
import labimg from '../../../assets/WhatsApp Image 2024-04-24 at 02.20.42_d882bcd9.jpg'

export default function SectionLab() {
    
const scrollTotop=()=>{
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })

}
    const [infoo,setInfoo]=useState([]);
    let getData =()=>{
      fetch("http://localhost:8888/labData")
      .then(json =>json.json())
      .then(res =>setInfoo(res))
    }

    useEffect(()=>
      getData()
    ,[])
    const filterData= infoo.filter( lab => lab.id <= 1)
    
    const navigate =useNavigate()
    const gotoNewPge=()=>{
        navigate("/ScanLabServices")
        
    }
  return (
    <div>
        <div >
        <Container style={{display:'flex'}}  >
       
             
        <div  style={{width:'110%'}} >
              {
                    filterData.map((lab )=>
                   <div className='w-10 ' key={lab.id}> <SingleLab key={lab.id} lab={lab} className="singleLab" /></div>
                )
                }
              </div>
         <div >
            
            <div className='textt'>
            <h2>Experience high-quality <br /> testing  and radiology <br /> without barriers</h2>
            <Button onClick={()=>{gotoNewPge();scrollTotop()}} id='btn'>learn more</Button>
            </div>
            <br />
            <Image src={labimg} className='imggg' />
        </div>
      </Container>
        </div>
    </div>
  )
}
