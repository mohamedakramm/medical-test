import React from 'react'
 import Doctors from '../../Componant/doctors/Doctors'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react'
import Lab from '../../Componant/Labtor/Lab'
export default function Home() {
  
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  
  }
  return (
    <>
      {/* <SearchPage/> */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item style={{width:'100%'}}>
                <Doctors />
              
              </Carousel.Item>
              <Carousel.Item style={{width:'100%'}}>
                <Doctors />
              
              </Carousel.Item>
      </Carousel>
        
        <Lab/>
        
    
      
    </>
  )
}