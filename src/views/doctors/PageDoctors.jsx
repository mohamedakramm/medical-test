import { Container, Row } from 'react-bootstrap'
import Doctors from '../../Componant/doctors/Doctors'
import SectionChat from '../home/section/SectionChat'
import { useNavigate } from 'react-router-dom'

export default function PageDoctors() {
  
  const navigate =useNavigate()
   let gotohomepage =()=>{
    navigate('/')
   }


  return (
    <div>
      <Container>
        <Row>
          <div style={{marginTop:'30px'}}>
            <span onClick={ ()=>gotohomepage()}>home  </span> &gt; <span>doctors</span>
          </div>
        </Row>
      </Container>
      <Doctors/>
      <SectionChat/>
    </div>
  )
}
