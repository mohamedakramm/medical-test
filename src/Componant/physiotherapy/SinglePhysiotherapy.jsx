import React from 'react'
import { Col,Image ,Card } from 'react-bootstrap'
import labPhoto from '../../assets/user-2023.01.032958.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocationDot ,faPhoneVolume ,faStar} from '@fortawesome/free-solid-svg-icons';
import './PhysiotherapyCenter.css'
export default function SinglePhysiotherapy({phy}) {
  return (
    <Col lg="4" md="6" sm="12" className='p-30 ml-1' style={{marginTop:'0'}}>
      <Image  src={labPhoto} className='phypic  shadow-lg  mb-4 ' />
      <Card variant="none"  style={{backgroundColor:'#7d643c'}} >
            <Card.Body className='cardBody' style={{backgroundColor:'#7d643c'}} >
              <Card.Title style={{width:'90%' ,alignItems:'center',fontSize:'30px' }} >{phy.name}</Card.Title>
              <Card.Text>
              
              <Card.Text className='text'>
              <FontAwesomeIcon icon={faLocationDot} />
                <span style={{marginLeft:'5px'}}>{phy.location}</span>
                </Card.Text>
                   
             <Card.Text className='text'>
                <FontAwesomeIcon icon={faPhoneVolume} />
                <span style={{marginLeft:'5px'}}>{phy.phone}</span>
              </Card.Text>   
                      
             <Card.Text className='text star'>
             <FontAwesomeIcon icon={faStar} style={{color:'#ecc023'}} />
             <FontAwesomeIcon icon={faStar}  style={{color:'#ecc023'}}/>
             <FontAwesomeIcon icon={faStar} style={{color:'#ecc023'}} />
             <FontAwesomeIcon icon={faStar} style={{color:'#ecc023'}}/>
             <FontAwesomeIcon icon={faStar} style={{color:'#ecc023'}}/>
                
              </Card.Text>      
            </Card.Text>
              
            </Card.Body>
          </Card>
    
      </Col>
  )
}
