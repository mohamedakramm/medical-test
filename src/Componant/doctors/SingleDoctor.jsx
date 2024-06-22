
import { Button, Col  ,Image  } from 'react-bootstrap';
import './singleDoctor.css'
import {  useNavigate } from 'react-router-dom';

export default function SingleDoctor({doctor}) {


const navigate =useNavigate()
const gotoNewPge=()=>{
    navigate(`/doctor/${doctor.id}`)
    
}
  return (
    
    <Col lg='4' md='6'  sm='12' className='p-30 ml-1' style={{marginTop:'0'}} onClick={()=>gotoNewPge()}>
        <div className='singleDoc border rounded-12 bg-white shadow-sm inner-box py-14 px-15'>
          <div style={{display:'flex'}}>
            <Image  variant="none" src={doctor.image} className='docpho' />
                <div>
                <h3>{doctor.name}</h3><br />
                <p>{doctor.Pediatrician}</p>
                </div>
              </div>
              <Button className='btttn'>visit the Doctor's Profile</Button>
        </div>
          
              
    </Col>
    
  )
}
