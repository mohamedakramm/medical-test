import {  Container, Row ,Image, Button } from 'react-bootstrap'
import imgoffer from '../../../assets/sec-img-1-100495c6.png'
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
    <div style={{marginTop:'30px'}}>
      <Container>
              <h1 className='h111'>what we offer </h1>
          <Row lg='3' md='2' sm='12' >
              
                 <div  id='offerr'>
                 <Image src={imgoffer} className='imgOffer' />
                  <Button id='bttn'> Book faster and <br /> more efficiently </Button>
                 </div>
                 <div  id='offerr' className="transparent-btn">
                 <Image src={imgoffer} className='imgOffer' />
                  <Button id='bttn' className="transparent-btn" onClick={()=>{handelRote();goTotop() }} > follow up with your <br /> doctor daily and easily </Button>
                 </div>
                 <div  id='offerr'>
                 <Image src={imgoffer} className='imgOffer' />
                  <Button id='bttn' className="transparent-btn" onClick={()=>{handelRotee();goTotop();}} > find the nearest <br /> laboratory or clinic </Button>
                 </div>
              
              
          </Row>
      </Container>
    </div>
  )
}
