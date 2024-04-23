
import Card from 'react-bootstrap/Card';
import photoDoctor from '../../assets/psychologist-dalia-el-chimi-psychiatry_20240422002420245.jpg'
import { Col , Button  } from 'react-bootstrap';
import './singleDoctor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope ,faLocationDot ,faMoneyBill1 ,faPhoneVolume} from '@fortawesome/free-solid-svg-icons';


export default function SingleDoctor({doctor}) {

  return (
    
    <Col lg='3' md='6'  sm='12' className='p-10 m-5 ' >
            <Card.Img variant="none" src={photoDoctor} className='docpic' />
          <Card style={{ width: '18rem' }} variant="none" className='crdDoc'>
            <Card.Body className='cardBody'>
              <Card.Title>{doctor.name}</Card.Title>
              <Card.Text style={{textAlign:'center' ,
            marginTop:'10px',

            }}>
              {doctor.specialization}
              </Card.Text>
              <Card.Text>
              <p > 
                <FontAwesomeIcon icon={faStethoscope} />
               <span style={{fontSize:'15px'}}> {doctor.Pediatrician}</span>
              </p>
              <p>
              <FontAwesomeIcon icon={faLocationDot} />
                <span style={{marginLeft:'5px'}}>{doctor.location}</span></p>
              <p>
              <FontAwesomeIcon icon={faMoneyBill1} />
              <span style={{marginLeft:'5px', wordSpacing:'1  px'}}>Fees: {doctor.fees} EGP
                </span>
                </p>        
                <p>
                <FontAwesomeIcon icon={faPhoneVolume} />
                <span style={{marginLeft:'5px'}}>16676-cost for regular call</span>
                  </p>      
              </Card.Text>
              <Card.Text>
              <Button variant="success" style={{marginLeft:'10%', width:'200px' ,marginTop:'25px'}}>Book now</Button>
              </Card.Text>
            </Card.Body>
          </Card>
    
    </Col>
    
  )
}
