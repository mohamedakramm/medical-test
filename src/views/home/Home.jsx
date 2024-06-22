import React from 'react'
//import Doctors from '../../Componant/doctors/Doctors'
//import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react'
import './home.css'
import {  useNavigate } from 'react-router-dom';
//import SearshBar from '../../Componant/Searsh/SearshBar';
import SectionLab from './section/SectionLab';
import SectionOffer from './section/SectionOffer';
import SectionPHSIOTHERAPY from './section/SectionPHSIOTHERAPY';
import SectionChat from './section/SectionChat';
import HeaderOne from './HeaderOne';
export default function Home() {
  
  const [index, setIndex] = useState(0);
  
  const navigate =useNavigate()
  const gotoNewPge=()=>{
      navigate("/doctor")
      
  }
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
 

  return (
    <>
      {/* <SearshBar/> */}
     <div style={{marginTop:'5px'}} activeIndex={index} onSelect={handleSelect} onClick={()=>gotoNewPge()}>

    
             
                <HeaderOne></HeaderOne>
              
            
      
     </div>
    
      <SectionLab/>

      <SectionOffer/>
      <SectionPHSIOTHERAPY/>
      <SectionChat/>
    
      
    </>
  )
}