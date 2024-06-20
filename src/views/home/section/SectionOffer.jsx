import {  Container, Row ,Image, Button } from 'react-bootstrap'
import imgoffer from '../../../assets/sec-img-1-100495c6.png'
import imgoffer1 from '../../../assets/images (1).png'
import imgoffer2 from '../../../assets/images (2).png'

import './sectionOffer.css'
import { useNavigate } from 'react-router-dom'
export default function SectionOffer() {
  const navigatee =useNavigate()

  const handelRote=()=>{
    navigatee("/doctor")
    
  }
  const handelRotee=()=>{
    navigatee("/ScanLabServices")
    
  }
 const goTotop=()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
 }
  return (
    
            <Container>
                <div style={{ marginTop: '30px' }}>
                <h1 className='h111'>What We Offer</h1>
                <div className="offers-container">
                <Row lg='3' md='1' sm='1' xs='10'>
                    <div id='offerr'>
                        <Image src={imgoffer1} className='imgOffer1' />
                        <Button id='bttn'>Book faster and<br /> more efficiently</Button>
                    </div>
                    <div id='oferr'>
                        <Image src={imgoffer} className='imgOffer' />
                        <Button id='bttn' onClick={() => { handelRote(); goTotop(); }}>Follow up with your<br /> doctor daily and easily</Button>
                    </div>
                    <div id='offerr'>
                        <Image src={imgoffer2} className='imgOffer2' />
                        <Button id='bttn' onClick={() => { handelRote(); goTotop(); }}>Find the nearest<br /> laboratory or clinic</Button>
                    </div>
                </Row>
                </div></div>
            </Container>
       
  )
}


      