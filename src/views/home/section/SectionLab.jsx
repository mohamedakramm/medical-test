import { Button,  Container, Image } from 'react-bootstrap';
import React from 'react'
import SingleLab from '../../../Componant/Labtor/SingleLab'
import { useState ,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
import './sectionLab.css'
import labimg from '../../../assets/WhatsApp Image 2024-04-24 at 02.20.42_d882bcd9.png'

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
        <div className="container"  >
        
       
            
            <div className='textt'>
            <h2>Experience high-quality <br /> testing  and radiology without barriers</h2>
            <Button onClick={()=>{gotoNewPge();scrollTotop()}} id='btn'>learn more</Button>
            </div>
            <br />
            <Image src={labimg} className='imggg' />
        </div>
     
       
    </div>
  )
}
