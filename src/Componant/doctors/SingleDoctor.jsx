
import Card from 'react-bootstrap/Card';
import photoDoctor from '../../assets/psychologist-dalia-el-chimi-psychiatry_20240422002420245.jpg'
import { Col , Button ,Image  } from 'react-bootstrap';
import './singleDoctor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope ,faLocationDot ,faMoneyBill1 ,faPhoneVolume} from '@fortawesome/free-solid-svg-icons';


export default function SingleDoctor({doctor}) {

  return (
    
    <Col lg='4' md='6'  sm='12' className='p-30 ml-1' style={{marginTop:'0'}}>
         <Image  variant="none" src={photoDoctor} className='docpic  shadow-lg  mb-4 ' />
          <Card variant="none" className='crdDoc' >
            <Card.Body className='cardBody'>
              <Card.Title >{doctor.name}</Card.Title>
         <Card.Text style={{textAlign:'center' ,
            marginTop:'10px',

            }}>
              {doctor.specialization}
         </Card.Text>
         <Card.Text>
              <Card.Text  className='text'> 
                <FontAwesomeIcon icon={faStethoscope} />
               <span style={{fontSize:'15px' , }}> {doctor.Pediatrician}</span>
              </Card.Text>
              <Card.Text className='text'>
              <FontAwesomeIcon icon={faLocationDot} />
                <span style={{marginLeft:'5px'}}>{doctor.location}</span>
                </Card.Text>
              <Card.Text className='text'>
              <FontAwesomeIcon icon={faMoneyBill1} />
              <span style={{marginLeft:'5px', wordSpacing:'1  px'}}>Fees: {doctor.fees} EGP
                </span>
                </Card.Text>        
                <Card.Text className='text'>
                <FontAwesomeIcon icon={faPhoneVolume} />
                <span style={{marginLeft:'5px'}}>16676-cost for regular call</span>
                  </Card.Text>      
          </Card.Text>
              <Card.Text className='text'>
              <Button variant="success" style={{marginLeft:'20%', width:'150px', marginTop:'10px'}}>Book now</Button>
              </Card.Text>
            </Card.Body>
          </Card>
    
    </Col>
    
  )
}
